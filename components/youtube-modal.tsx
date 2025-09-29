"use client"

import { useState } from "react"
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Play } from "lucide-react"

interface YouTubeModalProps {
  videoId: string
  triggerText: string
  variant?: "default" | "outline"
  size?: "default" | "sm" | "lg"
  className?: string
}

export function YouTubeModal({
  videoId,
  triggerText,
  variant = "outline",
  size = "lg",
  className = "",
}: YouTubeModalProps) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button variant={variant} size={size} className={`${className} bg-transparent`}>
          <Play className="mr-2 w-5 h-5" />
          {triggerText}
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-4xl w-full p-0 bg-background border-border">
        <div className="relative w-full" style={{ paddingBottom: "56.25%" }}>
          <iframe
            src={`https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0`}
            title="Demo Video"
            className="absolute inset-0 w-full h-full rounded-lg"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
      </DialogContent>
    </Dialog>
  )
}
