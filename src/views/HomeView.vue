<template>
  <main class="ai-c fg-1" style="padding-bottom: 100px;">
    <!--TITLE-->
    <header class="flex jc-c ai-c pt-30 title-cont-s white-color" style="width: 100%;">
      <section class="flex ai-c jc-sb gap-30 cont-8">
        <div class="flex ai-c gap-10">
          <a class="pd-10 lang flex ai-c gap-10 white-color" @click="changeLang('en')"><img src="../assets/svg/us.svg"
            height="20px" alt=""><strong>EN</strong> </a>
        <p>|</p>
        <a class="pd-10 lang flex ai-c gap-10 white-color" @click="changeLang('es')"><img src="../assets/svg/mx.svg"
            height="20px" alt=""><strong>ES</strong> </a>

        </div>
        <div class="flex ai-c gap-20">
          <a href="https://github.com/diazYohary" target="_blank" title="GitHub">
            <svg class="head-icon" width="78" height="76" viewBox="0 0 78 76" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M39.0324 0C17.4484 0 0 17.417 0 38.9632C0 56.187 11.18 70.7641 26.6896 75.9267C28.6284 76.3142 29.3383 75.0884 29.3383 74.0569C29.3383 73.1512 29.2743 70.0566 29.2743 66.8312C18.4163 69.1539 16.1555 62.1859 16.1555 62.1859C14.4107 57.6704 11.8249 56.51 11.8249 56.51C8.27022 54.123 12.0839 54.123 12.0839 54.123C16.0265 54.3816 18.0943 58.1273 18.0943 58.1273C21.584 64.0648 27.2065 62.3852 29.4693 61.3476C29.7913 58.8317 30.8262 57.0907 31.9251 56.1226C23.2649 55.2169 14.1517 51.8657 14.1517 36.9011C14.1517 32.6432 15.7015 29.1602 18.1573 26.4511C17.7704 25.483 16.4125 21.4827 18.5463 16.1289C18.5463 16.1289 21.842 15.0964 29.2723 20.1282C35.6619 18.408 42.3989 18.408 48.7885 20.1282C56.2208 15.0964 59.5165 16.1289 59.5165 16.1289C61.6493 21.4827 60.2914 25.488 59.9035 26.4511C62.4242 29.1602 63.9111 32.6432 63.9111 36.9011C63.9111 51.8677 54.7989 55.1565 46.0747 56.1226C47.4966 57.3483 48.7245 59.67 48.7245 63.3472C48.7245 68.5722 48.6605 72.7657 48.6605 74.0559C48.6605 75.0884 49.3715 76.3142 51.3093 75.9267C66.8199 70.7651 77.9998 56.187 77.9998 38.9632C78.0638 17.417 60.5514 0 39.0324 0Z" fill="white"/>
            </svg>
          </a>
          <a href="https://www.linkedin.com/in/yohary-diaz-jimenez-b7b03332b/" target="_blank" title="Linkedin">
            <svg class="head-icon" width="75" height="76" viewBox="0 0 75 76" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M56.1719 24.7822C65.2915 24.7822 74.3456 31.3903 74.3457 44.6123V72.6953C74.343 73.5709 73.9932 74.4101 73.374 75.0293C72.7549 75.6483 71.9155 75.9973 71.04 76H61.1279C60.2531 75.9964 59.4151 75.6472 58.7969 75.0283C58.1785 74.4092 57.8296 73.5703 57.8271 72.6953V49.5635C57.8271 47.3728 56.9572 45.2718 55.4082 43.7227C53.859 42.1734 51.7573 41.3027 49.5664 41.3027C47.3755 41.3028 45.2748 42.1735 43.7256 43.7227C42.1764 45.2718 41.3057 47.3726 41.3057 49.5635V72.6953C41.3032 73.5708 40.954 74.4101 40.335 75.0293C39.716 75.6483 38.8773 75.9973 38.002 76H28.085C27.2096 75.9972 26.3709 75.6483 25.752 75.0293C25.133 74.4101 24.7837 73.5708 24.7812 72.6953V29.7383C24.7837 28.8628 25.1329 28.0234 25.752 27.4043C26.3709 26.7854 27.2097 26.4371 28.085 26.4346H37.999C38.8743 26.4371 39.7131 26.7854 40.332 27.4043C40.9511 28.0234 41.3003 28.8628 41.3027 29.7383V31.8535C44.6075 27.574 50.0752 24.7823 56.1719 24.7822Z" fill="white"/>
            <path d="M17.9795 26.4346C18.0867 26.4347 18.1738 26.5217 18.1738 26.6289V75.8037C18.1738 75.9109 18.0867 75.9979 17.9795 75.998H1.84668C1.73954 75.9979 1.65241 75.9109 1.65234 75.8037V26.6289C1.65234 26.5217 1.7395 26.4347 1.84668 26.4346H17.9795Z" fill="white"/>
            <path d="M9.91211 0C15.3865 0 19.8241 4.43778 19.8242 9.91211C19.8242 15.3865 15.3865 19.8242 9.91211 19.8242C4.43778 19.8241 0 15.3865 0 9.91211C0.000119055 4.43786 4.43786 0.000119058 9.91211 0Z" fill="white"/>
            </svg>
          </a>
        </div>
        
      </section>
    </header>
    
    <section class="flex-c ai-c title-cont-g">
      <div class="flex jc-sa gap-20 cont-8 mq-column txt-c">
        <div class="flex-c jc-sb gap-30" style="height: 120%;">
          <div class="flex-c gap-10" >
            <h1 class="white-color title-name">YOHARY </h1>
            <h1 class="white-color fs-60">DIAZ JIMENEZ </h1>
            <h2 class="white-color fs-60 fw-5 italic">{{ $t('presentation.title_pt1') }}</h2>
            <h2 class="white-color fs-36 fw-5">{{ $t('presentation.title_pt2') }}</h2>
          </div>
          
          <div>
            <a @click="scrollTo('presentation')" class="black-btn">{{ $t('presentation.ctaBtn') }}</a>
          </div>
        </div>
        <!--
        
        <img class="img-presentation" src="/img/vector.png" alt="yohary-img">
        -->
      </div>
    </section>

    
    <!--PRESENTATION-->
    <section id="presentation" class="flex-c ai-c pv-50">
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
              <p>Figma</p>
              <p>Adobe Photoshop</p>
              <p>Adobe Illustrator</p>
              <p>Adobe XD</p>
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
              <p>{{ $t('skills.enLVL') }}</p>
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
import shader1 from '@/components/shader1.vue';

//LANG
const { locale } = useI18n();

const changeLang = (lang) => {
  locale.value = lang;
};
watch(locale, (newLocale) => {
  document.documentElement.setAttribute('lang', newLocale);
}, { immediate: true });

//SCROLL TO
const scrollTo=(sectionId)=>{
  const element=document.getElementById(sectionId);
  if(element){
    element.scrollIntoView({
      behavior: 'smooth'
    });
  }
}
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
