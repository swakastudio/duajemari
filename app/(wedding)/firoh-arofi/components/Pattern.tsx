"use client"

import { useCallback, useEffect, useState } from "react"
import Image from "next/image"
import { cn } from "@/lib/utils"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/components/ui/carousel"

/* =========================================
JUMLAH FOTO GALLERY
========================================= */

const ITEMS_COUNT = 10


export function Pattern() {

  const [mainApi, setMainApi] = useState<CarouselApi>()
  const [thumbApi, setThumbApi] = useState<CarouselApi>()
  const [selectedIndex, setSelectedIndex] = useState(0)


  /* =========================================
  KLIK THUMBNAIL
  ========================================= */

  const onThumbClick = useCallback(
    (index: number) => {
      if (!mainApi || !thumbApi) return
      mainApi.scrollTo(index)
    },
    [mainApi, thumbApi]
  )


  /* =========================================
  SYNC SLIDER
  ========================================= */

  const onSelect = useCallback(() => {
    if (!mainApi || !thumbApi) return

    const index = mainApi.selectedScrollSnap()

    setSelectedIndex(index)

    thumbApi.scrollTo(index)

  }, [mainApi, thumbApi])


  useEffect(() => {

    if (!mainApi) return

    onSelect()

    mainApi.on("select", onSelect)
    mainApi.on("reInit", onSelect)

    return () => {

      mainApi.off("select", onSelect)
      mainApi.off("reInit", onSelect)

    }

  }, [mainApi, onSelect])


  return (

    <div className="flex w-full max-w-xl flex-col gap-4">


      {/* =========================================
      MAIN IMAGE
      ========================================= */}

      <Carousel setApi={setMainApi} className="w-full">

        <CarouselContent>

          {Array.from({ length: ITEMS_COUNT }).map((_, index) => (

            <CarouselItem key={index}>

              <div className="relative aspect-[4/3] overflow-hidden rounded-xl">

                <Image
                  src={`/firoh-arofi/gallery-${index + 1}.jpg`}
                  alt={`Gallery ${index + 1}`}
                  fill
                  className="object-cover"
                  priority={index === 0}
                />

              </div>

            </CarouselItem>

          ))}

        </CarouselContent>

      </Carousel>



      {/* =========================================
      THUMBNAILS
      ========================================= */}

      <Carousel
        setApi={setThumbApi}
        opts={{
          containScroll: "keepSnaps",
          dragFree: true,
        }}
        className="w-full"
      >

        <CarouselContent className="-ml-2">

          {Array.from({ length: ITEMS_COUNT }).map((_, index) => (

            <CarouselItem
              key={index}
              className="basis-1/5 cursor-pointer pl-2 sm:basis-1/6"
              onClick={() => onThumbClick(index)}
            >

              <div
                className={cn(
                  "relative aspect-square overflow-hidden rounded-lg border-2 transition-all",
                  index === selectedIndex
                    ? "border-black opacity-100"
                    : "border-transparent opacity-40 hover:opacity-70"
                )}
              >

                <Image
                  src={`/firoh-arofi/gallery-${index + 1}.jpg`}
                  alt={`Thumbnail ${index + 1}`}
                  fill
                  className="object-cover"
                />

              </div>

            </CarouselItem>

          ))}

        </CarouselContent>

      </Carousel>

    </div>

  )

}
