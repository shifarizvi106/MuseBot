// poems.js

const poemBank = {
  love: [
    "In the hush of twilight, love murmurs like the tide.",
    "She carried galaxies in her silence, and I called it love.",
    "Love is not loud—it lingers like perfume in an empty room."
  ],
  pain: [
    "Pain, the ink with which I’ve written my truest verses.",
    "Every scar a stanza, every tear a tale.",
    "Let your ache spill—it may bloom into poetry."
  ],
  hope: [
    "Hope is a candle—even in storms, it remembers how to glow.",
    "You are not broken, just paused before the crescendo.",
    "The dawn still answers, even after a night of silence."
  ],
  grief: [
    "Grief, the echo of love unsaid.",
    "Even tombstones tremble when a name is spoken with longing.",
    "The moon weeps too—she just does it in phases."
  ],
  dream: [
    "Dreams do not sleep—they wait for you to believe again.",
    "Your soul was born a wanderer, stitched from stardust.",
    "Chase not the world, but the fire that dances within."
  ],
  quran: [
    "And He is with you wherever you are. [57:4]",
    "Verily, in the remembrance of Allah do hearts find rest. [13:28]",
    "Indeed, with hardship comes ease. [94:6]"
  ]
};

// Returns poetic response based on keyword match
function getPoeticResponse(input) {
  for (const keyword in poemBank) {
    if (input.includes(keyword)) {
      const lines = poemBank[keyword];
      return lines[Math.floor(Math.random() * lines.length)];
    }
  }
  return null; // Fallback to GPT logic
}
