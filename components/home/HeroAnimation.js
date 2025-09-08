// components/home/HeroAnimation.js
"use client";

import { useEffect, useMemo, useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";

/**
 * SparkAI Hero Animation (right column visual)
 * Story:
 * - Customers approach → chat with Echo → feel heard → say thanks → leave
 * - Each closed conversation triggers a € coin popping into a basket
 * - Subtle orbit labels hint all platforms feed the phone
 *
 * Drop this next to your left-side copy in HeroSection.
 */

export default function HeroAnimation() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <div className="relative w-full h-[520px] md:h-[560px] rounded-2xl overflow-hidden bg-gradient-to-br from-[#0f0f12] via-[#17171c] to-[#0d0f14] ring-1 ring-white/5">
      {/* roomy negative-space glows */}
      <div className="pointer-events-none absolute -top-24 -right-32 h-96 w-96 rounded-full bg-[#d4ff00]/15 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-32 -left-24 h-[420px] w-[420px] rounded-full bg-fuchsia-500/15 blur-3xl" />

      {/* Center stage: Phone */}
      <Phone prefersReducedMotion={prefersReducedMotion} />

      {/* Echo mascot (idle, welcoming) */}
      <motion.div
        aria-label="Echo"
        initial={{ y: 0, rotate: -2 }}
        animate={
          prefersReducedMotion
            ? {}
            : { y: [0, -8, 0], rotate: [-2, 2, -2] }
        }
        transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
        className="absolute right-[18%] bottom-16 md:right-[20%]"
      >
        <EchoAvatar />
      </motion.div>

      {/* Basket for coins */}
      <div className="absolute right-8 bottom-8 md:right-10 md:bottom-10">
        <Basket />
      </div>

      {/* Customer queue + conversation orchestrator */}
      <CustomerFlow prefersReducedMotion={prefersReducedMotion} />

      {/* Platform orbit (subtle) */}
      <div className="absolute inset-0 pointer-events-none">
        <PlatformOrbit />
      </div>
    </div>
  );
}

/** Coin that flies from phone center to the basket (right/bottom) */
function Coin({ start = { x: -40, y: -30 }, end = { x: 190, y: 20 } }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: start.x, y: start.y, scale: 0.7 }}
      animate={{
        opacity: [0, 1, 1, 0],
        x: [start.x, (start.x + end.x) / 2, end.x],
        y: [start.y, start.y - 70, end.y],
        scale: [0.7, 1, 0.9],
      }}
      transition={{ duration: 1.15, ease: "easeInOut" }}
      className="absolute left-1/2 top-1/2"
      style={{ transform: "translate(-50%, -50%)" }}
    >
      <div className="h-6 w-6 rounded-full bg-[#d4ff00] shadow-[0_0_30px_rgba(212,255,0,0.55)] ring-1 ring-black/20 flex items-center justify-center">
        <span className="text-[10px] font-bold text-black">€</span>
      </div>
    </motion.div>
  );
}

function Basket() {
  return (
    <div className="relative h-12 w-16">
      <div className="absolute inset-0 bg-gradient-to-b from-white/20 to-white/5 rounded-b-xl rounded-t-md border border-white/15" />
      <div className="absolute -top-2 left-1/2 -translate-x-1/2 h-1.5 w-10 rounded-full bg-white/20" />
    </div>
  );
}

function EchoAvatar() {
  return (
    <div className="relative h-18 w-18 md:h-20 md:w-20 select-none">
      {/* head */}
      <div className="absolute inset-0 rounded-2xl bg-white shadow-lg" />
      {/* faceplate */}
      <div className="absolute inset-1 rounded-2xl bg-black/90" />
      {/* eyes */}
      <div className="absolute inset-0 flex items-center justify-center gap-2">
        <motion.span
          className="h-2 w-2 rounded-full bg-[#d4ff00]"
          animate={{ opacity: [0.6, 1, 0.6] }}
          transition={{ duration: 1.8, repeat: Infinity }}
        />
        <motion.span
          className="h-2 w-2 rounded-full bg-[#d4ff00]"
          animate={{ opacity: [1, 0.6, 1] }}
          transition={{ duration: 1.8, repeat: Infinity }}
        />
      </div>
      {/* body */}
      <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 h-8 w-10 rounded-2xl bg-white/90 shadow" />
    </div>
  );
}

function PlatformOrbit() {
  const items = [
    { key: "instagram", label: "Instagram" },
    { key: "whatsapp", label: "WhatsApp" },
    { key: "facebook", label: "Facebook" },
    { key: "telegram", label: "Telegram" },
    { key: "website", label: "Website" },
  ];
  return (
    <div className="absolute inset-0">
      {items.map((it, i) => (
        <motion.div
          key={it.key}
          className="absolute left-1/2 top-1/2"
          style={{ transform: "translate(-50%, -50%)" }}
          initial={{ rotate: 0 }}
          animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, duration: 26 - i * 2, ease: "linear" }}
        >
          <div
            className="relative"
            style={{ width: 240 + i * 26, height: 240 + i * 26 }}
          >
            <motion.div
              className="absolute -right-5 top-1/2 -translate-y-1/2 rounded-full bg-white/10 backdrop-blur px-2.5 py-1.5 text-xs text-white/90 border border-white/10"
              initial={{ scale: 0.92, opacity: 0.65 }}
              animate={{ scale: [0.92, 1, 0.92], opacity: [0.65, 1, 0.65] }}
              transition={{ repeat: Infinity, duration: 2.6 + i * 0.4 }}
            >
              {it.label}
            </motion.div>
          </div>
        </motion.div>
      ))}
    </div>
  );
}

/** Phone with live-rendered message sequence (controlled by CustomerFlow) */
function Phone({ prefersReducedMotion, sequence = [] }) {
  return (
    <div className="absolute inset-0 flex items-center justify-center">
      <div className="relative w-[280px] sm:w-[320px] md:w-[360px] aspect-[9/19] rounded-[32px] border border-white/10 bg-black/60 shadow-2xl backdrop-blur-xl">
        {/* notch */}
        <div className="absolute left-1/2 -translate-x-1/2 top-2 h-1.5 w-20 rounded-full bg-white/10" />
        {/* chat area */}
        <div className="absolute inset-0 p-4 flex flex-col gap-2 overflow-hidden">
          <AnimatePresence initial={false}>
            {sequence.map((m) => (
              <motion.div
                key={m.key}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ type: "spring", stiffness: 300, damping: 26 }}
                className={`max-w-[82%] px-3 py-2 rounded-2xl text-sm leading-snug shadow-sm ${
                  m.from === "echo"
                    ? "self-end bg-[#d4ff00] text-black"
                    : "self-start bg-white/10 text-white"
                }`}
              >
                {m.text}
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}

/**
 * Orchestrates: customer enters → chats → thanks → exit → coin → next customer
 * State machine phases: enter | chat | exit
 */
function CustomerFlow({ prefersReducedMotion }) {
  const customers = useMemo(
    () => [
      { id: "c1", avatar: "👩", name: "Arta" },
      { id: "c2", avatar: "🧑", name: "Lori" },
      { id: "c3", avatar: "👨", name: "Dion" },
    ],
    []
  );

  const [idx, setIdx] = useState(0); // which customer
  const [phase, setPhase] = useState("enter"); // enter | chat | exit
  const [seq, setSeq] = useState([]); // phone message sequence
  const [coinKey, setCoinKey] = useState(0);

  // timed state machine
  useEffect(() => {
    if (prefersReducedMotion) return;

    let t;
    if (phase === "enter") {
      t = setTimeout(() => setPhase("chat"), 1600);
    } else if (phase === "chat") {
      const c = customers[idx % customers.length];
      const convo = [
        { key: `${c.id}-1`, from: "customer", text: `Hi, I'm ${c.name}. Do you have this in stock?` },
        { key: `${c.id}-2`, from: "echo", text: "Yes — available today. Want me to hold one for you? ✅" },
        { key: `${c.id}-3`, from: "customer", text: "Yes please. Also, price for 2?" },
        { key: `${c.id}-4`, from: "echo", text: "€39.90 each — I'll send a quick checkout link." },
        { key: `${c.id}-5`, from: "echo", text: "Follow-up sent ✅" },
        { key: `${c.id}-6`, from: "customer", text: "Thank you!" },
        { key: `${c.id}-7`, from: "echo", text: "Order confirmed 🎉" },
      ];
      setSeq([]);

      let i = 0;
      const add = () => {
        setSeq((s) => [...s, convo[i]]);
        i += 1;
        if (i < convo.length) {
          setTimeout(add, 900);
        } else {
          setTimeout(() => setPhase("exit"), 900);
        }
      };
      add();
    } else if (phase === "exit") {
      // spawn a coin and move to next
      setCoinKey((k) => k + 1);
      t = setTimeout(() => {
        setSeq([]);
        setIdx((i) => (i + 1) % customers.length);
        setPhase("enter");
      }, 1400);
    }
    return () => clearTimeout(t);
  }, [phase, idx, customers, prefersReducedMotion]);

  return (
    <>
      {/* spacious walkway */}
      <div className="absolute left-6 right-40 bottom-6 h-16 rounded-xl bg-white/5 border border-white/10" />

      {/* current customer avatar moving along path */}
      <CustomerAvatar phase={phase} person={customers[idx % customers.length]} />

      {/* messages on phone */}
      <Phone sequence={seq} prefersReducedMotion={prefersReducedMotion} />

      {/* coin on conversation close */}
      <AnimatePresence>{phase === "exit" && <Coin key={coinKey} />}</AnimatePresence>
    </>
  );
}

function CustomerAvatar({ phase, person }) {
  // x positions by phase (relative to container)
  const positions = {
    enter: { x: 40 }, // from left
    chat: { x: 55 },  // near phone center
    exit: { x: 92 },  // leave to right
  };
  const xTarget = positions[phase].x + "%";

  return (
    <motion.div
      className="absolute bottom-10 left-0"
      initial={{ x: "-10%", opacity: 0 }}
      animate={{ x: xTarget, opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ type: "spring", stiffness: 120, damping: 18 }}
    >
      <div className="flex items-center gap-3 bg-white/10 border border-white/15 rounded-full px-3.5 py-2 text-white/90 backdrop-blur">
        <span className="text-base">{person.avatar}</span>
        <span className="text-sm">{person.name}</span>
        {phase === "exit" && (
          <motion.span
            className="ml-1 text-xs rounded-full bg-[#d4ff00] text-black px-2 py-0.5"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
          >
            Deal won
          </motion.span>
        )}
      </div>
    </motion.div>
  );
}
