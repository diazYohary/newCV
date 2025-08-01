<template>
  <main class="ai-c fg-1" style="padding-bottom: 100px;">
    <!--TITLE
    <header class="flex-c ai-c pt-30 title-cont-s white-color" style="width: 100%;">
      <div class="flex ai-c gap-10 cont-8">
        <a class="pd-10 lang flex gap-10 white-color" @click="changeLang('en')"><img src="../assets/svg/us.svg"
            height="20px" alt=""><strong>EN</strong> </a>
        <p>|</p>
        <a class="pd-10 lang flex gap-10 white-color" @click="changeLang('es')"><img src="../assets/svg/mx.svg"
            height="20px" alt=""><strong>ES</strong> </a>
      </div>
    </header>
    
    <section class="flex-c ai-c title-cont-g" style="width: 100%;">
      <div class="flex jc-sa gap-20 cont-8 mq-column">
        <div class="flex-c gap-10 mq-txt-c">
          <h1 class="white-color title-name">YOHARY </h1>
          <h1 class="white-color fs-60">DIAZ JIMENEZ </h1>
          <h2 class="white-color fs-36">{{ $t('presentation.title_pt1') }}</h2>
          <h2 class="white-color fs-36">{{ $t('presentation.title_pt2') }}</h2>
        </div>
        <img class="img-presentation" src="/img/vector.png" alt="yohary-img">
      </div>
    </section>
-->
    <shader-example/>
    
    <!--PRESENTATION-->
    <section class="flex-c ai-c pv-50">
      <article class="flex mq-column gap-30 cont-8 jc-sa mq-txt-c">
        <div class="animation1 mq-cont-10">
          <h3 class="title">{{ $t('aboutme.title') }}</h3>
          <p class="txt-j">{{ $t('aboutme.intro') }}</p>
        </div>
        <div class="card gap-10 mq-cont-10">
          <h4 class="subtitle-2">{{ $t('aboutme.contact') }}</h4>
          <a class="flex gap-10" href="tel:+522481350838" target="_blank">
            <img src="../assets/svg/tel.svg" width="24px" alt="phone-icon">
            <p>+52 (248) 125 0838</p>
          </a>
          <a class="flex gap-10" href="mailto:diazyohary@gmail.com" target="_blank">
            <img src="../assets/svg/mail.svg" width="24px" alt="mail-icon">
            <p>diazyohary@gmail.com</p>
          </a>
          <a class="flex gap-10" href="https://www.linkedin.com/in/yohary-diaz-jimenez-b7b03332b/" target="_blank">
            <img src="../assets/svg/linkedin.svg" width="24px" alt="Linkedin-icon">
            <p>Linkedin</p>
          </a>
          <a class="flex gap-10" href="https://github.com/diazYohary" target="_blank">
            <img src="../assets/svg/github.svg" width="24px" alt="GitHub-icon">
            <p>GitHub</p>
          </a>
        </div>
      </article>
    </section>
    <!--EXPERIENCE-->
    <section class="flex-c ai-c bg-color-2 pv-50" style="width: 100%;">
      <article class="flex-c gap-30  cont-8">
        <h3 class="animation1 title mq-txt-c">{{ $t('experience.title') }}</h3>
        
    <!--BMTools-->
        <experience class="animation1" :title="$t('experience.bmt.title')" :role="$t('experience.bmt.role')"
          :location="$t('experience.bmt.location')" :dates="$t('experience.bmt.dates')">
          <div class="flex-c gap-30 mq-column">
            <div class="flex gap-30 mq-column">
              <p class="fs-18 cont-3 mq-cont-10">{{ $t('experience.bmt.A1') }}</p>
              <p class="fs-18 cont-3 mq-cont-10">{{ $t('experience.bmt.A2') }}</p>
              <p class="fs-18 cont-3 mq-cont-10">{{ $t('experience.bmt.A4') }}</p>
            </div>
            <div class="flex gap-30 mq-column">
              <p class="fs-18 cont-3 mq-cont-10">{{ $t('experience.bmt.A3') }}</p>
              <p class="fs-18 cont-3 mq-cont-10">{{ $t('experience.bmt.A5') }}</p>
            </div>
          </div>
        </experience>
        
    <!--DFSOFT-->
        <experience class="animation1" :title="$t('experience.dfsoft.title')" :role="$t('experience.dfsoft.role')"
          :location="$t('experience.dfsoft.location')" :dates="$t('experience.dfsoft.dates')">
          <div class="flex-c gap-30 mq-column">
            <div class="flex gap-30 mq-column">
              <p class="fs-18 cont-3 mq-cont-10">{{ $t('experience.dfsoft.A1') }}</p>
              <p class="fs-18 cont-3 mq-cont-10">{{ $t('experience.dfsoft.A2') }}</p>
              <p class="fs-18 cont-3 mq-cont-10">{{ $t('experience.dfsoft.A4') }}</p>
            </div>
            <div class="flex gap-30 mq-column">
              <p class="fs-18 cont-3 mq-cont-10">{{ $t('experience.dfsoft.A3') }}</p>
              <p class="fs-18 cont-3 mq-cont-10">{{ $t('experience.dfsoft.A5') }}</p>
            </div>
          </div>
        </experience>
      </article>
    </section>
    <!--SKILLS-->
    <section class="flex-c ai-c pv-50" style="width: 100%;">
      <article class="cont-8">
        <h3 class="animation1 title mq-txt-c">{{ $t('skills.title') }}</h3>
        <div class="animation1 flex jc-c gap-30 mq-column">
          <div class=" flex-c gap-30 cont-3 mq-cont-10">
            <card class="expand">
              <h3 class="subtitle-2">{{ $t('skills.T1') }}</h3>
              <p>HTML ({{ $t('skills.LVL3') }})</p>
              <p>CSS ({{ $t('skills.LVL3') }})</p>
              <p>JavaScript ({{ $t('skills.LVL2') }})</p>
              <p>PHP ({{ $t('skills.LVL2') }})</p>
              <p>C++ ({{ $t('skills.LVL2') }})</p>
              <p>C# ({{ $t('skills.LVL1') }})</p>
              <p>Java ({{ $t('skills.LVL1') }})</p>
              <p>Python ({{ $t('skills.LVL1') }})</p>
            </card>
            <card class="expand">
              <h3 class="subtitle-2">{{ $t('skills.T4') }}</h3>
              <p>SQL ({{ $t('skills.LVL2') }})</p>
            </card>
          
          </div>
          <div class="  flex-c gap-30 cont-3 mq-cont-10">
            <card class="expand">
              <h3 class="subtitle-2">{{ $t('skills.T2') }}</h3>
              <p>Laravel ({{ $t('skills.LVL2') }})</p>
              <p>Vue.js ({{ $t('skills.LVL2') }})</p>
              <p>React ({{ $t('skills.LVL2') }})</p>
              <p>Firebase ({{ $t('skills.LVL1') }})</p>
            </card>
            <card class="expand">
              <h3 class="subtitle-2">{{ $t('skills.T3') }}</h3>
              <p>Adobe Photoshop</p>
              <p>Adobe Illustrator</p>
              <p>Adobe XD</p>
              <p>Figma</p>
            </card>
            
          </div>
          <div class=" flex-c gap-30 cont-3 mq-cont-10">
            <card class="expand">
              <h3 class="subtitle-2">{{ $t('skills.T5') }}</h3>
              <p>Git</p>
              <p>GitHub</p>
            </card>
            <card class="expand">
              <h3 class="subtitle-2">{{ $t('skills.T6') }}</h3>
              <p>Windows</p>
              <p>Ubuntu</p>
            </card>
            <card class="expand">
              <h3 class="subtitle-2">{{ $t('skills.T7') }}</h3>
              <p>Inglés (B2)</p>
            </card>
          </div>

        </div>
      </article>
    </section>
    <!--EDUCATION-->
    <section class="flex-c ai-c bg-color-2 pv-50" style="width: 100%;">
      <article class="cflex-c gap-30 cont-8">
        <h3 class="animation1 title mq-txt-c">{{ $t('education.title') }}</h3>
        <experience class="animation1" :title="$t('education.college')" :role="$t('education.career')"
          :location="$t('education.date')" :dates="$t('education.gpa')">
          <div class="flex-c gap-30 mq-column">
            <div class="flex gap-30 mq-column">
              <p class="fs-18 cont-3 mq-cont-10">{{ $t('experience.dfsoft.A1') }}</p>
              <p class="fs-18 cont-3 mq-cont-10">{{ $t('experience.dfsoft.A2') }}</p>
              <p class="fs-18 cont-3 mq-cont-10">{{ $t('experience.dfsoft.A4') }}</p>
            </div>
            <div class="flex gap-30 mq-column">
              <p class="fs-18 cont-3 mq-cont-10">{{ $t('experience.dfsoft.A3') }}</p>
              <p class="fs-18 cont-3 mq-cont-10">{{ $t('experience.dfsoft.A5') }}</p>
            </div>
          </div>
        </experience>
      </article>


    </section>
  </main>
</template>
<script setup>
import { useI18n } from 'vue-i18n';
import { watch } from 'vue';
import { ref, computed, onMounted, onUnmounted } from 'vue';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
//components
import Experience from '@/components/Experience.vue';
import Card from '@/components/Card.vue';
import HeaderComp from '@/components/HeaderComp.vue';
import ShaderExample from '@/components/ShaderExample.vue';

//LANG
const { locale } = useI18n();

const changeLang = (lang) => {
  locale.value = lang;
};
watch(locale, (newLocale) => {
  document.documentElement.setAttribute('lang', newLocale);
}, { immediate: true });

//ANIMATIONS
gsap.registerPlugin(ScrollTrigger);
onMounted(()=>{
  const items = document.querySelectorAll('.animation1');
  items.forEach((item, index) => {
    gsap.fromTo(
      item, {
      //INITIAL STATE
      opacity: 0,
      y: 50
    },
      {//FINAL STATE
        opacity: 1,
        y: 0,
        duration: .8,
        ease: 'power4.out',

        scrollTrigger: {
          trigger: item,
          start: 'top 90%',
          end: 'bottom 80%',
          scrub: true,
          //markers:true,
          id: `item-animation-${index}`
        }
      }
    );
  });
});
onUnmounted(()=>{
  ScrollTrigger.getAll().forEach(trigger=>trigger.kill());
})

</script>
