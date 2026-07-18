/* ==========================================================================
   ROMANTIC SURPRISE SITE - LOGIC & CUSTOM CONFIGURATION
   ========================================================================== */

// --------------------------------------------------------------------------
// 1. CONFIGURATION (ปรับแต่งข้อมูลตรงนี้ได้เลย)
// --------------------------------------------------------------------------
const CONFIG = {
    // รหัสผ่าน 6 หลักสำหรับปลดล็อก (PIN Code)
    PIN_CODE: "100524",

    // ชื่อของคนพิเศษ (จะไปแสดงในหน้า Welcome และการ์ดต่างๆ)
    PARTNER_NAME: "ปืยธดา ❤️",

    // ลิงก์รูปภาพต่างๆ (สามารถเปลี่ยนเป็นพาธไฟล์รูปภาพในเครื่องได้ เช่น "images/photo1.jpg")
    AVATAR_IMAGE: "https://media.discordapp.net/attachments/1031162508230279238/1528033116743008256/IMG_9722.jpg?ex=6a5cd33c&is=6a5b81bc&hm=8ded85845360cbbcc6652a210b412c5ae2de29cce0596dfd4622a9e0319f8fbc&=&format=webp&width=642&height=856", // รูปโปรไฟล์หน้า Lock Screen
    WELCOME_IMAGE: "https://media.discordapp.net/attachments/1031162508230279238/1528033116252278794/2026-01-13___204620_ANMP0020.jpg?ex=6a5cd33c&is=6a5b81bc&hm=8e8221d29a185a3edd62a60b5272e644d9b19f9bbe9ac746feb3a22423839890&=&format=webp&width=642&height=856", // รูปโพลารอยด์หน้าสอง
    PRE_LETTER_IMAGE: "https://images.unsplash.com/photo-1518895949257-7621c3c786d7?q=80&w=600&auto=format&fit=crop", // รูปภาพในหน้าก่อนจดหมาย
    FINAL_IMAGE: "https://media.discordapp.net/attachments/1031162508230279238/1528033115883175986/IMG_0922.jpg?ex=6a5cd33c&is=6a5b81bc&hm=68739126825b8e00702265141a001940e8986cf9145168eab4e4d324746db734&=&format=webp&width=1268&height=856", // รูปโพลารอยด์หน้าสุดท้าย

    // ข้อความต้อนรับ (หน้า 2)
    WELCOME_TITLE: "สุขสันต์วันครบรอบนะคนเก่ง ❤️",
    WELCOME_MESSAGE: `ขอบคุณที่เข้ามาเป็นส่วนหนึ่งของชีวิต
ทุกวันที่มีเธอคือวันที่ดีที่สุด
ขอให้เราจับมือกันแบบนี้ไปอีกนานแสนนานนะ`,

    // ข้อความในหน้าก่อนจดหมาย
    PRE_LETTER_TEXT: `ก่อนจะเปิดอ่านจดหมายรัก...
มีอีกหนึ่งความทรงจำดีๆ ที่อยากให้เธอดูนะ
ทุกเรื่องราวและทุกการเดินทางของเราสองคน
มันคือสิ่งที่มีค่ามากที่สุดสำหรับเค้าเลยนะคนเก่ง ❤️`,

    // ข้อความจดหมายรัก (หน้า 4) - แสดงผลแบบพิมพ์ทีละตัว (Typing Effect)
    LOVE_LETTER: `ถึงคนที่รักที่สุด...

ขอบคุณที่อยู่เคียงข้างกันมาตลอดนะ
ขอบคุณสำหรับทุกๆ กำลังใจ
ทุกเสียงหัวเราะที่มอบให้กัน
และทุกการจับมือที่คอยประคองกันในวันที่เหนื่อยล้า

ไม่ว่าจะผ่านไปกี่วัน กี่เดือน หรือกี่ปี
ใจของเค้าก็ยังยืนยันที่จะเลือกเธอเหมือนเดิม

รักเธอที่สุดในโลกเลยนะ ❤️`,

    // รายการความทรงจำ/อัลบั้มรูปภาพ (หน้า 3) - สามารถเพิ่ม-ลด หรือแก้ไขรูปและข้อความได้ที่นี่
    MEMORIES: [
        {
            date: "14 กุมภาพันธ์ 2024",
            image: "https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?q=80&w=600&auto=format&fit=crop",
            caption: "เดทแรกของเราที่ร้านอาหารริมแม่น้ำ จำได้ไหมว่าวันนั้นเธอตื่นเต้นมากเลย เขินกันไปมาน่ารักที่สุด ❤️"
        },
        {
            date: "25 มิถุนายน 2024",
            image: "https://images.unsplash.com/photo-1522673607200-164d1b6ce486?q=80&w=600&auto=format&fit=crop",
            caption: "ทริปเที่ยวทะเลด้วยกันครั้งแรก ลมพัดเย็นๆ กับการเดินจับมือกันบนหาดทรายขาว เป็นช่วงเวลาที่มีความสุขมากๆ"
        },
        {
            date: "31 ตุลาคม 2024",
            image: "https://images.unsplash.com/photo-1509248961158-e54f6934749c?q=80&w=600&auto=format&fit=crop",
            caption: "วันฮาโลวีนที่เราไปดูหนังผีด้วยกันที่ห้อง เธอเอาแต่หลับตาปี๋แล้วกอดเค้าซะแน่นเลย 🎃"
        },
        {
            date: "25 ธันวาคม 2024",
            image: "https://images.unsplash.com/photo-1544984243-ec57ea16fe25?q=80&w=600&auto=format&fit=crop",
            caption: "คริสต์มาสแสนอบอุ่นกับของขวัญชิ้นพิเศษที่เธอมอบให้เค้า เค้ายังเก็บมันไว้อย่างดีเสมอมานะ 🎄"
        },
        {
            date: "1 มกราคม 2025",
            image: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?q=80&w=600&auto=format&fit=crop",
            caption: "เคาท์ดาวน์ข้ามปีไปด้วยกัน ขอสัญญาว่าปีต่อๆ ไปและทุกๆ ปีก็จะมีเธอนอนจับมืออยู่ข้างๆ กันแบบนี้นะ"
        },
        {
            date: "วันสำคัญวันนี้",
            image: "https://images.unsplash.com/photo-1464746133101-a2c3f88e0dd9?q=80&w=600&auto=format&fit=crop",
            caption: "จับมือกันข้ามปี ข้ามเดือน และข้ามทุกๆ อุปสรรคไปด้วยกันนะ อยู่เป็นความสุขของกันและกันไปนานๆ นะคะคนเก่ง"
        }
    ],

    // ลิงก์เพลงรัก (หากต้องการใช้เพลงส่วนตัว ให้ใส่ URL ไฟล์เสียงตรงนี้ เช่น "music/love-song.mp3")
    // หากปล่อยว่างไว้ ระบบจะสังเคราะห์เสียงเปียโนสุดโรแมนติกขึ้นมาเล่นให้อัตโนมัติ (Web Audio API Synthesizer)
    AUDIO_URL: ""
};

// --------------------------------------------------------------------------
// 2. STATE VARIABLES
// --------------------------------------------------------------------------
let currentPin = "";
let isMusicPlaying = false;
let audioInstance = null;
let audioContext = null;
let synthIntervalId = null;
let isLetterOpened = false;
let activeCanvasAnimation = null;

// --------------------------------------------------------------------------
// 3. INITIALIZATION
// --------------------------------------------------------------------------
window.addEventListener("DOMContentLoaded", () => {
    applyConfig();
    generateTimeline();
    setupCanvas();
    startFloatingHeartsLoop();

    // ตรวจสอบสถานะการปลดล็อกใน LocalStorage
    const isUnlocked = localStorage.getItem("surprise_unlocked");
    if (isUnlocked === "true") {
        // ข้ามหน้า Lock Screen ไปยังหน้า Welcome เลย
        goToScreen("screen-welcome", true);
        // แสดงปุ่มเปิด/ปิดเพลง
        document.getElementById("audio-control").classList.remove("hidden");
    }
});

// นำข้อมูลจาก CONFIG มาใช้ใน DOM
function applyConfig() {
    document.getElementById("lock-avatar").src = CONFIG.AVATAR_IMAGE;
    document.getElementById("welcome-img").src = CONFIG.WELCOME_IMAGE;
    document.getElementById("pre-letter-img").src = CONFIG.PRE_LETTER_IMAGE;
    document.getElementById("final-img").src = CONFIG.FINAL_IMAGE;
    document.getElementById("partner-name").innerHTML = CONFIG.PARTNER_NAME;
    document.querySelector(".welcome-title").innerHTML = CONFIG.WELCOME_TITLE;
    document.getElementById("welcome-msg-text").innerHTML = CONFIG.WELCOME_MESSAGE.replace(/\n/g, "<br>");
    document.getElementById("pre-letter-msg-text").innerHTML = CONFIG.PRE_LETTER_TEXT.replace(/\n/g, "<br>");
}

// --------------------------------------------------------------------------
// 4. NAVIGATION SYSTEM
// --------------------------------------------------------------------------
function goToScreen(screenId, immediate = false) {
    const screens = document.querySelectorAll(".screen");
    const targetScreen = document.getElementById(screenId);

    if (!targetScreen) return;

    if (immediate) {
        screens.forEach(s => {
            s.classList.remove("active-screen");
            s.style.display = "none";
            s.style.opacity = "";
            s.style.transform = "";
        });
        targetScreen.style.display = "flex";
        targetScreen.style.opacity = "";
        targetScreen.style.transform = "";
        setTimeout(() => targetScreen.classList.add("active-screen"), 50);
        return;
    }

    // ทำเอฟเฟกต์เฟดออกและเฟดเข้า
    const active = document.querySelector(".screen.active-screen");
    if (active) {
        active.style.opacity = "0";
        active.style.transform = "translateY(-20px)";
        setTimeout(() => {
            active.classList.remove("active-screen");
            active.style.display = "none";
            active.style.opacity = "";
            active.style.transform = "";

            targetScreen.style.display = "flex";
            // บังคับให้เบราว์เซอร์ประมวลผล Layout ก่อนอนิเมท
            targetScreen.offsetHeight;
            targetScreen.classList.add("active-screen");
            targetScreen.style.opacity = "1";
            targetScreen.style.transform = "translateY(0)";

            // จัดการ Action พิเศษของแต่ละหน้า
            onScreenChange(screenId);
        }, CONFIG.AUDIO_URL ? 300 : 400);
    } else {
        targetScreen.style.display = "flex";
        targetScreen.style.opacity = "";
        targetScreen.style.transform = "";
        setTimeout(() => targetScreen.classList.add("active-screen"), 50);
    }
}

// ทำงานเพิ่มเติมเมื่อสลับหน้าจอ
function onScreenChange(screenId) {
    if (screenId === "screen-welcome") {
        document.getElementById("audio-control").classList.remove("hidden");
        // สตาร์ทเพลงอัตโนมัติหากยังไม่ได้เปิด (เนื่องจากการกด PIN ถือเป็น User Interaction แล้ว)
        if (!isMusicPlaying) {
            playMusic();
        }
    } else if (screenId === "screen-letter") {
        // หากเปิดจดหมายแล้วแต่กดกลับไปหน้าอื่นแล้วกลับมาใหม่
        if (isLetterOpened) {
            startTypingEffect();
        }
    }
}

// --------------------------------------------------------------------------
// 5. LOCK SCREEN PIN LOGIC
// --------------------------------------------------------------------------
function pressKey(key) {
    playSynthSound("pop");
    const errorMsg = document.getElementById("error-msg");
    errorMsg.classList.remove("visible");

    if (key === "delete") {
        if (currentPin.length > 0) {
            currentPin = currentPin.slice(0, -1);
        }
    } else {
        if (currentPin.length < 6) {
            currentPin += key;
        }
    }

    updatePinDots();

    // เมื่อกรอกรหัสครบ 6 หลัก
    if (currentPin.length === 6) {
        checkPin();
    }
}

function resetPin() {
    currentPin = "";
    updatePinDots();
    document.getElementById("error-msg").classList.remove("visible");
}

function updatePinDots() {
    const dots = document.querySelectorAll(".pin-dot");
    dots.forEach((dot, index) => {
        if (index < currentPin.length) {
            dot.classList.add("filled");
        } else {
            dot.classList.remove("filled");
        }
    });
}

function checkPin() {
    const lockCard = document.querySelector(".lock-card");
    const errorMsg = document.getElementById("error-msg");

    if (currentPin === CONFIG.PIN_CODE) {
        // รหัสถูกต้อง
        playSynthSound("success");
        lockCard.classList.add("unlock-flash");

        localStorage.setItem("surprise_unlocked", "true");

        setTimeout(() => {
            lockCard.classList.remove("unlock-flash");
            goToScreen("screen-welcome");
        }, 800);
    } else {
        // รหัสผิดพลาด
        playSynthSound("error");
        lockCard.classList.add("shake");
        errorMsg.classList.add("visible");

        // สั่นเครื่อง (ถ้ามือถือรองรับ)
        if (navigator.vibrate) {
            navigator.vibrate(200);
        }

        setTimeout(() => {
            lockCard.classList.remove("shake");
            resetPin();
        }, 500);
    }
}

// --------------------------------------------------------------------------
// 6. SYNTHESIZED AUDIO & MUSIC CONTROLLER (Web Audio API)
// --------------------------------------------------------------------------
function initAudioContext() {
    if (!audioContext) {
        audioContext = new (window.AudioContext || window.webkitAudioContext)();
    }
    if (audioContext.state === "suspended") {
        audioContext.resume();
    }
}

// เล่นเสียงสั้นๆ สำหรับ PIN Success/Error/Typing
function playSynthSound(type) {
    try {
        initAudioContext();
        const osc = audioContext.createOscillator();
        const gain = audioContext.createGain();
        osc.connect(gain);
        gain.connect(audioContext.destination);

        const now = audioContext.currentTime;

        if (type === "success") {
            // เสียงปิ๊งหวานๆ (Arpeggio สูงขึ้น)
            osc.type = "triangle";
            osc.frequency.setValueAtTime(523.25, now); // C5
            osc.frequency.setValueAtTime(659.25, now + 0.1); // E5
            osc.frequency.setValueAtTime(783.99, now + 0.2); // G5
            osc.frequency.setValueAtTime(1046.50, now + 0.3); // C6
            gain.gain.setValueAtTime(0.15, now);
            gain.gain.exponentialRampToValueAtTime(0.001, now + 0.6);
            osc.start(now);
            osc.stop(now + 0.6);
        } else if (type === "error") {
            // เสียงสั่นๆ ทุ้มๆ (Buzz)
            osc.type = "sawtooth";
            osc.frequency.setValueAtTime(130.81, now); // C3
            osc.frequency.setValueAtTime(110.00, now + 0.15); // A2
            gain.gain.setValueAtTime(0.15, now);
            gain.gain.exponentialRampToValueAtTime(0.001, now + 0.4);
            osc.start(now);
            osc.stop(now + 0.4);
        } else if (type === "typewriter") {
            // เสียงพิมพ์คีย์บอร์ดสั้นๆ
            osc.type = "sine";
            osc.frequency.setValueAtTime(1200 + Math.random() * 400, now);
            gain.gain.setValueAtTime(0.015, now);
            gain.gain.exponentialRampToValueAtTime(0.001, now + 0.05);
            osc.start(now);
            osc.stop(now + 0.05);
        } else if (type === "pop") {
            // เสียง Pop สั้นๆ น่ารักๆ ตอนกดรหัส
            osc.type = "sine";
            osc.frequency.setValueAtTime(450, now);
            osc.frequency.exponentialRampToValueAtTime(1100, now + 0.08);
            gain.gain.setValueAtTime(0.08, now);
            gain.gain.exponentialRampToValueAtTime(0.001, now + 0.08);
            osc.start(now);
            osc.stop(now + 0.08);
        }
    } catch (e) {
        console.log("Web Audio API is not fully loaded/supported yet: " + e);
    }
}

// จัดการเปิด/ปิดเพลงหลัก
function toggleMusic() {
    if (isMusicPlaying) {
        pauseMusic();
    } else {
        playMusic();
    }
}

function playMusic() {
    initAudioContext();
    isMusicPlaying = true;

    const icon = document.getElementById("music-icon");
    const text = document.getElementById("music-text");
    const control = document.getElementById("audio-control");

    control.classList.add("playing");
    icon.innerHTML = "❤️";
    text.innerHTML = "หยุดเพลง";

    // กรณีมี URL เพลงของตัวเอง
    if (CONFIG.AUDIO_URL) {
        if (!audioInstance) {
            audioInstance = new Audio(CONFIG.AUDIO_URL);
            audioInstance.loop = true;
        }
        audioInstance.play().catch(err => {
            console.log("Audio autoplay blocked or failed. Playing procedural fallback synth instead. Error: " + err);
            startProceduralSynth();
        });
    } else {
        // ใช้เพลงเปียโนสังเคราะห์แบบ Ambient
        startProceduralSynth();
    }
}

function pauseMusic() {
    isMusicPlaying = false;

    const icon = document.getElementById("music-icon");
    const text = document.getElementById("music-text");
    const control = document.getElementById("audio-control");

    control.classList.remove("playing");
    icon.innerHTML = "🎵";
    text.innerHTML = "เปิดเพลง";

    if (audioInstance) {
        audioInstance.pause();
    }
    stopProceduralSynth();
}

// เปียโน Ambient สังเคราะห์ (Canon in D Chords Progression)
function startProceduralSynth() {
    if (synthIntervalId) return;

    // ลำดับคอร์ดสไตล์อบอุ่นโรแมนติก: C - G - Am - Em - F - C - F - G
    const chords = [
        [130.81, 261.63, 329.63, 392.00], // C3, C4, E4, G4 (C Major)
        [98.00, 196.00, 246.94, 293.66],  // G2, G3, B3, D4 (G Major)
        [110.00, 220.00, 261.63, 329.63], // A2, A3, C4, E4 (A minor)
        [82.41, 164.81, 196.00, 246.94],  // E2, E3, G3, B3 (E minor)
        [87.31, 174.61, 218.27, 261.63],  // F2, F3, A3, C4 (F Major)
        [130.81, 261.63, 329.63, 392.00], // C3, C4, E4, G4 (C Major)
        [87.31, 174.61, 218.27, 261.63],  // F2, F3, A3, C4 (F Major)
        [98.00, 196.00, 246.94, 293.66]   // G2, G3, B3, D4 (G Major)
    ];

    // โน้ตเมโลดี้หวานๆ สุ่มในสเกล C Major
    const melodyScale = [261.63, 293.66, 329.63, 349.23, 392.00, 440.00, 493.88, 523.25, 587.33, 659.25, 783.99];

    let chordIndex = 0;
    let step = 0;

    function playNote(freq, type, duration, volume) {
        if (!audioContext || audioContext.state === "suspended") return;

        const osc = audioContext.createOscillator();
        const filter = audioContext.createBiquadFilter();
        const gain = audioContext.createGain();

        osc.type = type;
        osc.frequency.setValueAtTime(freq, audioContext.currentTime);

        filter.type = "lowpass";
        filter.frequency.setValueAtTime(type === "triangle" ? 800 : 1200, audioContext.currentTime);

        osc.connect(filter);
        filter.connect(gain);
        gain.connect(audioContext.destination);

        const now = audioContext.currentTime;
        // Fade in อ่อนๆ
        gain.gain.setValueAtTime(0, now);
        gain.gain.linearRampToValueAtTime(volume, now + 0.05);
        // Fade out นุ่มๆ
        gain.gain.setValueAtTime(volume, now + duration - 0.2);
        gain.gain.exponentialRampToValueAtTime(0.0001, now + duration);

        osc.start(now);
        osc.stop(now + duration);
    }

    // เล่นโน้ตเปียโนวนลูปทุกๆ 400ms
    synthIntervalId = setInterval(() => {
        // เล่นคอร์ดเบสทุกๆ 4 จังหวะ (1.6 วินาทีต่อคอร์ด)
        if (step % 4 === 0) {
            const chord = chords[chordIndex];
            chord.forEach((freq, idx) => {
                // คีย์ต่ำเล่นเป็นเสียงเบส
                const vol = idx === 0 ? 0.08 : 0.05;
                const dur = 1.9;
                playNote(freq, "triangle", dur, vol);
            });
            chordIndex = (chordIndex + 1) % chords.length;
        }

        // เล่นเสียงเมโลดี้พริ้วไหวแบบสุ่ม/กำหนดทิศทางบางจังหวะ
        if (step % 2 === 0 || Math.random() > 0.4) {
            // เลือกโน้ตสุ่มจากสเกล C Major สูงๆ
            const noteFreq = melodyScale[Math.floor(Math.random() * melodyScale.length)];
            playNote(noteFreq, "sine", 0.8 + Math.random() * 0.4, 0.04);
        }

        step++;
    }, 450);
}

function stopProceduralSynth() {
    if (synthIntervalId) {
        clearInterval(synthIntervalId);
        synthIntervalId = null;
    }
}

// --------------------------------------------------------------------------
// 7. TIMELINE MEMORY GALLERY
// --------------------------------------------------------------------------
function generateTimeline() {
    const container = document.getElementById("timeline-container");
    container.innerHTML = "";

    CONFIG.MEMORIES.forEach((memory, index) => {
        const item = document.createElement("div");
        item.className = "timeline-item";

        item.innerHTML = `
            <div class="timeline-dot"></div>
            <div class="timeline-card">
                <span class="timeline-date">${memory.date}</span>
                <div class="timeline-photo-wrapper" onclick="openLightbox('${memory.image}', '${memory.caption}')">
                    <img src="${memory.image}" alt="Memory ${index + 1}" class="timeline-photo">
                </div>
                <p class="timeline-caption">${memory.caption}</p>
            </div>
        `;
        container.appendChild(item);
    });
}

// Lightbox (ขยายรูปภาพ)
function openLightbox(imgSrc, captionText) {
    const lightbox = document.getElementById("lightbox");
    const lightboxImg = document.getElementById("lightbox-img");
    const lightboxCaption = document.getElementById("lightbox-caption");

    lightboxImg.src = imgSrc;
    lightboxCaption.innerHTML = captionText;
    lightbox.classList.remove("hidden");
}

function closeLightbox() {
    document.getElementById("lightbox").classList.add("hidden");
}

// --------------------------------------------------------------------------
// 8. INTERACTIVE ENVELOPE & TYPING EFFECT
// --------------------------------------------------------------------------
function openLetter() {
    const envelopeWrapper = document.getElementById("envelope-wrapper");
    if (envelopeWrapper.classList.contains("open")) return;

    envelopeWrapper.classList.add("open");

    // รออนิเมชั่นจดหมายเลื่อนขึ้นเสร็จสิ้น
    setTimeout(() => {
        envelopeWrapper.classList.add("hidden");
        document.getElementById("opened-letter-card").classList.remove("hidden");
        startTypingEffect();
    }, 1200);
}

function startTypingEffect() {
    isLetterOpened = true;
    const textContainer = document.getElementById("typing-letter-text");
    const cursor = document.getElementById("typing-cursor");
    const nextBtn = document.getElementById("letter-next-btn");

    textContainer.innerHTML = "";
    nextBtn.classList.add("hidden");
    cursor.style.display = "inline";

    const textToType = CONFIG.LOVE_LETTER;
    let charIndex = 0;
    let currentHtml = "";

    function type() {
        if (charIndex < textToType.length) {
            const char = textToType.charAt(charIndex);

            if (char === "\n") {
                currentHtml += "<br>";
            } else {
                currentHtml += char;
            }

            textContainer.innerHTML = currentHtml;
            charIndex++;

            // เล่นเสียงพิมพ์คีย์บอร์ดเบาๆ
            if (char !== " " && char !== "\n" && Math.random() > 0.3) {
                playSynthSound("typewriter");
            }

            // หน่วงเวลาการพิมพ์ (สุ่มความเร็วให้ดูสมจริงขึ้น)
            const delay = char === "," || char === "." || char === "\n" ? 300 : (50 + Math.random() * 40);
            setTimeout(type, delay);
        } else {
            // เมื่อพิมพ์จบแล้ว
            cursor.style.display = "none";
            nextBtn.classList.remove("hidden");

            // แสดงเอฟเฟกต์หัวใจระเบิดทั่วหน้าจอ
            triggerHeartBurst();
        }
    }

    setTimeout(type, 500);
}

// --------------------------------------------------------------------------
// 9. FLOATING BACKGROUND HEARTS (CSS + JS)
// --------------------------------------------------------------------------
function startFloatingHeartsLoop() {
    const decorContainer = document.getElementById("bg-decorations");

    setInterval(() => {
        // จำกัดจำนวนหัวใจไม่ให้มากเกินไป
        if (decorContainer.childElementCount > 35) {
            decorContainer.removeChild(decorContainer.firstChild);
        }

        const heart = document.createElement("div");
        heart.className = "floating-heart";
        heart.innerHTML = ["❤️", "💖", "💝", "💕", "✨"][Math.floor(Math.random() * 5)];

        // สุ่มคุณสมบัติของหัวใจ
        const size = Math.floor(Math.random() * 20) + 12; // 12px - 32px
        heart.style.fontSize = `${size}px`;
        heart.style.left = `${Math.random() * 100}vw`;

        const duration = Math.random() * 6 + 6; // 6s - 12s
        heart.style.animationDuration = `${duration}s`;

        const delay = Math.random() * 2;
        heart.style.animationDelay = `${delay}s`;

        decorContainer.appendChild(heart);
    }, 400);
}

// --------------------------------------------------------------------------
// 10. CANVAS SURPRISE EFFECTS (CONFETTI, FIREWORKS, HEARTS BURST)
// --------------------------------------------------------------------------
let canvas, ctx;
let particles = [];

function setupCanvas() {
    canvas = document.getElementById("surprise-canvas");
    ctx = canvas.getContext("2d");

    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);
}

function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}

// คลาสจัดการอนุภาคแต่ละชิ้น
class Particle {
    constructor(x, y, color, type) {
        this.x = x;
        this.y = y;
        this.color = color;
        this.type = type; // "confetti" | "firework" | "heart"

        this.alpha = 1;
        this.decay = Math.random() * 0.015 + 0.01;

        if (type === "confetti") {
            this.size = Math.random() * 8 + 5;
            this.vx = Math.random() * 4 - 2;
            this.vy = Math.random() * 5 + 2; // หล่นลงล่าง
            this.rotation = Math.random() * 360;
            this.rotationSpeed = Math.random() * 4 - 2;
        } else if (type === "firework") {
            this.size = Math.random() * 3 + 1.5;
            const angle = Math.random() * Math.PI * 2;
            const speed = Math.random() * 5 + 3;
            this.vx = Math.cos(angle) * speed;
            this.vy = Math.sin(angle) * speed;
            this.gravity = 0.08;
        } else if (type === "heart") {
            this.size = Math.random() * 15 + 10;
            const angle = Math.random() * Math.PI * 2;
            const speed = Math.random() * 4 + 2;
            this.vx = Math.cos(angle) * speed;
            this.vy = Math.sin(angle) * speed;
        }
    }

    update() {
        if (this.type === "confetti") {
            this.x += this.vx;
            this.y += this.vy;
            this.rotation += this.rotationSpeed;
            this.alpha -= this.decay * 0.5;
        } else if (this.type === "firework") {
            this.vx *= 0.98;
            this.vy *= 0.98;
            this.vy += this.gravity;
            this.x += this.vx;
            this.y += this.vy;
            this.alpha -= this.decay;
        } else if (this.type === "heart") {
            this.x += this.vx;
            this.y += this.vy;
            this.alpha -= this.decay * 1.5;
        }
    }

    draw() {
        ctx.save();
        ctx.globalAlpha = this.alpha;

        if (this.type === "confetti") {
            ctx.translate(this.x, this.y);
            ctx.rotate((this.rotation * Math.PI) / 180);
            ctx.fillStyle = this.color;
            ctx.fillRect(-this.size / 2, -this.size / 2, this.size, this.size);
        } else if (this.type === "firework") {
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
            ctx.fillStyle = this.color;
            ctx.shadowBlur = 10;
            ctx.shadowColor = this.color;
            ctx.fill();
        } else if (this.type === "heart") {
            drawHeartShape(ctx, this.x, this.y, this.size, this.color);
        }

        ctx.restore();
    }
}

// ช่วยวาดรูปหัวใจ 2D บน Canvas
function drawHeartShape(ctx, x, y, size, color) {
    ctx.beginPath();
    ctx.moveTo(x, y + size / 4);
    ctx.quadraticCurveTo(x, y, x + size / 2, y);
    ctx.quadraticCurveTo(x + size, y, x + size, y + size / 3);
    ctx.quadraticCurveTo(x + size, y + (size * 2) / 3, x + size / 2, y + size);
    ctx.quadraticCurveTo(x, y + (size * 2) / 3, x, y + size / 3);
    ctx.quadraticCurveTo(x, y, x, y + size / 4);
    ctx.closePath();
    ctx.fillStyle = color;
    ctx.fill();
}

// สตาร์ทลูปอนิเมชั่นของ Canvas
function startCanvasAnimationLoop() {
    if (activeCanvasAnimation) return;

    function render() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        for (let i = particles.length - 1; i >= 0; i--) {
            particles[i].update();
            particles[i].draw();

            // ลบชิ้นส่วนที่จางหายหมดแล้ว
            if (particles[i].alpha <= 0) {
                particles.splice(i, 1);
            }
        }

        activeCanvasAnimation = requestAnimationFrame(render);
    }
    render();
}

// ระเบิดหัวใจแบบระเบิดวงกลม (เมื่อพิมพ์จดหมายเสร็จ)
function triggerHeartBurst() {
    const x = window.innerWidth / 2;
    const y = window.innerHeight / 2;
    const colors = ["#ff477e", "#ff85a2", "#f43f5e", "#ec4899", "#f472b6"];

    for (let i = 0; i < 40; i++) {
        const color = colors[Math.floor(Math.random() * colors.length)];
        particles.push(new Particle(x, y, color, "heart"));
    }

    startCanvasAnimationLoop();
}

// ปล่อยพลุจากด้านล่างไประเบิดกลางจอ
function createFireworkExplosion() {
    const startX = Math.random() * window.innerWidth;
    const targetY = Math.random() * (window.innerHeight * 0.4) + window.innerHeight * 0.15;
    const colors = ["#ff477e", "#ff85a2", "#ec4899", "#3b82f6", "#10b981", "#fbbf24", "#a78bfa"];
    const color = colors[Math.floor(Math.random() * colors.length)];

    // ฟังก์ชันพลุวิ่งขึ้นบนก่อนระเบิด
    let currentY = window.innerHeight;
    const speed = 15;

    function launch() {
        if (currentY > targetY) {
            currentY -= speed;
            ctx.save();
            ctx.beginPath();
            ctx.arc(startX, currentY, 3, 0, Math.PI * 2);
            ctx.fillStyle = "#fff";
            ctx.shadowBlur = 5;
            ctx.shadowColor = "#fff";
            ctx.fill();
            ctx.restore();
            requestAnimationFrame(launch);
        } else {
            // เมื่อถึงเป้าหมายระเบิดเป็นละออง
            for (let i = 0; i < 60; i++) {
                particles.push(new Particle(startX, targetY, color, "firework"));
            }
        }
    }
    launch();
}

// สร้างกระดาษสี (Confetti) ลอยลงมาเรื่อยๆ
function spawnConfettiLoop() {
    const colors = ["#ff477e", "#ff85a2", "#3b82f6", "#10b981", "#fbbf24", "#ec4899", "#60a5fa"];

    // สุ่มสร้างกระดาษสีตามมุมด้านบนหน้าจอ
    for (let i = 0; i < 4; i++) {
        const x = Math.random() * window.innerWidth;
        const color = colors[Math.floor(Math.random() * colors.length)];
        particles.push(new Particle(x, -20, color, "confetti"));
    }
}

// --------------------------------------------------------------------------
// 11. FINAL SURPRISE ACTIVATION
// --------------------------------------------------------------------------
function triggerFinalSurprise() {
    // ซ่อนปุ่มเซอร์ไพรส์ และแสดงการ์ดแสดงความรู้สึกจริง
    document.getElementById("surprise-btn-wrapper").classList.add("hidden");
    document.getElementById("surprise-reveal-card").classList.remove("hidden");

    // เปิดลูปการคำนวณและวาดเอฟเฟกต์ Canvas
    startCanvasAnimationLoop();

    // เล่นพลุชุดใหญ่ต่อเนื่อง
    for (let i = 0; i < 4; i++) {
        setTimeout(createFireworkExplosion, i * 400);
    }

    // วนลูปปล่อยพลุและกระดาษหลากสี
    const fireworkInterval = setInterval(() => {
        if (document.getElementById("screen-final").classList.contains("active-screen")) {
            createFireworkExplosion();
        } else {
            clearInterval(fireworkInterval);
        }
    }, 1200);

    const confettiInterval = setInterval(() => {
        if (document.getElementById("screen-final").classList.contains("active-screen")) {
            spawnConfettiLoop();
        } else {
            clearInterval(confettiInterval);
        }
    }, 300);
}

// --------------------------------------------------------------------------
// 12. STORY CONTROLLER ACTIONS (RESTART & LOCK)
// --------------------------------------------------------------------------
function restartLoveStory() {
    // รีเซ็ตการเปิดจดหมายและเอฟเฟกต์ต่างๆ
    isLetterOpened = false;
    document.getElementById("envelope-wrapper").classList.remove("open", "hidden");
    document.getElementById("opened-letter-card").classList.add("hidden");

    document.getElementById("surprise-btn-wrapper").classList.remove("hidden");
    document.getElementById("surprise-reveal-card").classList.add("hidden");

    // นำทางกลับหน้า Welcome
    goToScreen("screen-welcome");
}

function lockApp() {
    // ลบประวัติการปลดล็อกใน LocalStorage
    localStorage.removeItem("surprise_unlocked");

    // ปิดเพลง
    pauseMusic();
    document.getElementById("audio-control").classList.add("hidden");

    // รีเซ็ตรหัสและกลับหน้าจอแรก
    resetPin();
    isLetterOpened = false;
    document.getElementById("envelope-wrapper").classList.remove("open", "hidden");
    document.getElementById("opened-letter-card").classList.add("hidden");
    document.getElementById("surprise-btn-wrapper").classList.remove("hidden");
    document.getElementById("surprise-reveal-card").classList.add("hidden");

    goToScreen("screen-lock", true);
}
