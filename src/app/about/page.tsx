"use client";

import Header from "../../components/Header";
import ContactSection from "../../components/contact-section";
import Footer from "../../components/footer";
import HeroSection from "../../components/hero-section";
import WhyTelegramSection from "../../components/why-telegram-section";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "../../components/ui/carousel";

import { Card, CardContent } from "../../components/ui/card";

import * as React from "react";
import type { CarouselApi } from "../../components/ui/carousel";
import { SidebarProvider } from "@/components/ui/sidebar";

export default function AboutPage() {
  const [api, setApi] = React.useState<CarouselApi | undefined>();
  const [current, setCurrent] = React.useState(0);
  const [count, setCount] = React.useState(0);

  React.useEffect(() => {
    if (!api) return;
    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap());
    api.on("select", () => {
      setCurrent(api.selectedScrollSnap());
    });
  }, [api]);

  // Ref for the carousel container
  const carouselRef = React.useRef<HTMLDivElement>(null);

  // Mouse wheel handler for vertical navigation
  React.useEffect(() => {
    // Only scroll if deltaY exceeds threshold
    const WHEEL_THRESHOLD = 40;
    let wheelTimeout: NodeJS.Timeout | null = null;
    let wheelAccum = 0;
    const handleWheel = (e: WheelEvent) => {
      if (!api) return;
      if (Math.abs(e.deltaY) > Math.abs(e.deltaX)) {
        e.preventDefault();
        wheelAccum += e.deltaY;
        if (wheelTimeout) clearTimeout(wheelTimeout);
        wheelTimeout = setTimeout(() => {
          if (wheelAccum > WHEEL_THRESHOLD) {
            api.scrollNext();
          } else if (wheelAccum < -WHEEL_THRESHOLD) {
            api.scrollPrev();
          }
          wheelAccum = 0;
        }, 80); // debounce for smoother experience
      }
    };
    const el = carouselRef.current;
    if (el) {
      el.addEventListener("wheel", handleWheel, { passive: false });
    }
    return () => {
      if (el) {
        el.removeEventListener("wheel", handleWheel);
      }
    };
  }, [api]);

  return (
    <SidebarProvider className="flex-col">
      <Header />
      <main className="flex flex-col items-center justify-center min-h-[350px] max-h-[500px] py-8 relative">
        <div ref={carouselRef} className="w-full max-w-xl relative">
          <Carousel
            setApi={setApi}
            opts={{ align: "start", loop: true }}
            orientation="vertical"
            className="w-full h-[500px]"
          >
            <CarouselContent className="-mt-1 h-[500px]">
              <CarouselItem className="pt-1 md:basis-1/2 h-full flex-1">
                <div className="p-1 h-full flex-1">
                  <Card className="h-full flex flex-col flex-1">
                    <CardContent className="flex items-center justify-center p-6 h-full flex-1">
                      <HeroSection />
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
              <CarouselItem className="pt-1 md:basis-1/2 h-full flex-1">
                <div className="p-1 h-full flex-1">
                  <Card className="h-full flex flex-col flex-1">
                    <CardContent className="flex items-center justify-center p-6 h-full flex-1">
                      <WhyTelegramSection />
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
              <CarouselItem className="pt-1 md:basis-1/2 h-full flex-1">
                <div className="p-1 h-full flex-1">
                  <Card className="h-full flex flex-col flex-1">
                    <CardContent className="min-h-[500px] flex items-center justify-center p-6 flex-1">
                      <ContactSection />
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            </CarouselContent>
          </Carousel>
          {/* Bullets navigation - stacked and positioned right */}
          <div className="absolute top-1/2 right-0 -translate-y-1/2 flex flex-col items-center gap-3 pr-4 z-10">
            {Array.from({ length: count }).map((_, idx) => (
              <button
                key={idx}
                className={`cursor-pointer w-4 h-4 rounded-full border-2 border-gray-400 transition-colors duration-200 ${
                  current === idx ? "bg-gray-800 border-gray-800" : "bg-white"
                }`}
                onClick={() => api?.scrollTo(idx)}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </SidebarProvider>
  );
}
