<script setup>
import { ref, defineProps, onMounted } from 'vue';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';


const props = defineProps({
    title: {
        type: String,
        required: true,
        default: 'TITLE'
    },
    role: {
        type: String,
        default: 'ROLE'
        //required:true
    },
    location: {
        type: String,
        //required:true
    },
    dates: {
        type: String,
        //required:true
    },
});

const isOpen = ref(false);
const modalContent = ref(null);

gsap.registerPlugin(ScrollTrigger);

const toggleContent = () => {
    isOpen.value = !isOpen.value;
}
const onEnter = (element, done) => {
    //INITIAL STATE
    gsap.set(element, { height: '0', overflow: 'hidden', opacity:0 });

    gsap.to(element, {
        height: 'auto',
        duration: 0.5,
        opacity:1,
        ease: 'power2.inOut',
        onComplete: () => {
            done();
            ScrollTrigger.refresh();
        }
    });
}

const onLeave = (element, done) => {
    gsap.to(element, {
        height: 0,
        opacity:0,
        duration: 0.5,
        ease: 'power2.inOut',
        onComplete: () => {
            gsap.set(element, { overflow: 'hidden' });
            done();
            ScrollTrigger.refresh();
        }
    });
}
/*
const toggleContent = () => {
    isOpen.value = !isOpen.value;
    const content = modalContent.value;

    if (isOpen.value) {
        gsap.set(content, { height: 'auto', overflow: 'hidden' });
        gsap.from(content, {
            height: 0,
            opacity: 0,
            duration: 0.5,
            ease: 'power2.inOut',
        });
    } else {
        gsap.to(content, {
            height: 0,
            opacity: 1,
            duration: 0.5,
            ease: 'power2.inOut',
            onComplete: () => {
                gsap.set(content, { overflow: 'hidden' });
            }
        });
    }
}
onMounted(() => {
    gsap.set(modalContent.value, { height: 0, overflow: 'hidden' });
});
*/
/*




    
*/



</script>
<template>
    <div ref="content" class="card gap-10 mq-mb-10">
        <div class="flex jc-sb ai-fe mq-column">
            <div>
                <h4 class="subtitle" style="margin-bottom: 0;">{{ role }}</h4>
                <h4 class="subtitle-2">{{ title }}</h4>
            </div>
            <div class="txt-r">
                <h4 class="subtitle-2" style="margin-bottom: 0;">{{ dates }}</h4>
                <h4 class="subtitle-2 mq-off">{{ location }}</h4>
            </div>
        </div>
        <div class="display-ib">
            <button v-if="!isOpen" @click.prevent="toggleContent" class="btn-transition">{{ $t('buttons.show_details')
            }}</button>
        </div>
        <transition @enter="onEnter" @leave="onLeave">
            <div ref="modalContent" v-if="isOpen" class="flex-c gap-20 ">
                <slot>text</slot>
                <div class="display-ib">
                    <button @click.prevent="toggleContent">{{ $t('buttons.hide_details') }}</button>
                </div>
            </div>
        </transition>


    </div>
</template>
<style>
.btn-transition {
    transition: .2s ease-in-out;
}
</style>