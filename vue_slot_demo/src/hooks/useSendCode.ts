import { ref, type Ref } from "vue";

export default (countDown: number): {buttonText: Ref<string>, sendCode: () => void} => {
    const localCountDown = ref(countDown);
    const buttonText = ref('发送验证码');

    const sendCode = () => {
        const timer = setInterval(() => {
            localCountDown.value--;
            buttonText.value = localCountDown.value + 's';
            if(localCountDown.value === 0) {
                clearInterval(timer);
                buttonText.value = '发送验证码';
                localCountDown.value = countDown;
            }
        }, 1000);
    };

    return { buttonText, sendCode};
};