"use client";

import { useEffect, useRef } from 'react'

// One shared scroll loop drives every scroll-linked element on the page.
// Each registered element gets four CSS variables, updated every animation frame:
//   --enter  0 → 1 as the element rises from the bottom of the viewport to 40% from the top (eased)
//   --pass  -1 → 1 across the element's whole trip through the viewport (for parallax)
//   --exit   0 → 1 as the element scrolls up and out past the top of the viewport
//   --center 0 → 1 as the viewport's middle line travels from the element's top to its bottom
// Animations are written in CSS against these variables, so React never re-renders on scroll.

const elements = new Set<HTMLElement>()
let frame = 0
let listening = false

const clamp01 = (n: number) => Math.min(1, Math.max(0, n))
const easeOutCubic = (t: number) => 1 - Math.pow(1 - t, 3)

function update() {
  frame = 0
  const vh = window.innerHeight
  const maxScroll = document.documentElement.scrollHeight - vh
  const remainingScroll = Math.max(0, maxScroll - window.scrollY)
  const enterSpan = vh * 0.6

  elements.forEach((el) => {
    const rect = el.getBoundingClientRect()
    const raw = (vh - rect.top) / enterSpan
    // Elements near the end of the page may never reach 40% from the top;
    // scale their progress so they still finish exactly when the page bottoms out
    const reachable = (vh - (rect.top - remainingScroll)) / enterSpan
    const enter = clamp01(reachable < 1 ? raw / Math.max(reachable, 0.0001) : raw)
    const pass = clamp01((vh - rect.top) / (vh + rect.height)) * 2 - 1
    const exit = clamp01(-rect.top / Math.max(rect.height, 1))
    const center = clamp01((vh / 2 - rect.top) / Math.max(rect.height, 1))

    el.style.setProperty('--enter', easeOutCubic(enter).toFixed(4))
    el.style.setProperty('--pass', pass.toFixed(4))
    el.style.setProperty('--exit', exit.toFixed(4))
    el.style.setProperty('--center', center.toFixed(4))
  })
}

function schedule() {
  if (!frame) frame = requestAnimationFrame(update)
}

function startListening() {
  if (listening) return
  listening = true
  window.addEventListener('scroll', schedule, { passive: true })
  window.addEventListener('resize', schedule)
  window.addEventListener('load', schedule)
}

export function useScrollScene<T extends HTMLElement>() {
  const ref = useRef<T>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    elements.add(el)
    startListening()
    schedule()
    return () => {
      elements.delete(el)
    }
  }, [])

  return ref
}
