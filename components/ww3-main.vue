<template>
  <div class="ww3-main">
    <video class="video _g-visible-desktop" loop="loop" autoplay="" muted="">
      <source src="~/assets/video/ww3-background.mp4" type="video/mp4" />
    </video>
    <div class="ww3-main__banner _g-visible-tablet">
      <img src="~/assets/image/mobile-banner.png">
    </div>
    <div class="ww3-main__wrapper">
      <div class="ww3-main__content">
        <div class="ww3-main__text" v-html="$t('text')" />
        <div class="ww3-main__buttons">
          <div class="ww3-main__buttons-item ww3-main__buttons-item--yellow play-free">{{$t('button.play')}}
            <svg width="9" height="13" viewBox="0 0 9 13" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M9 6.5L4.25612e-07 12.1292L9.15761e-07 0.870834L9 6.5Z" fill="black"/>
            </svg>
          </div>
          <a href="" target="_self" class="ww3-main__buttons-item ww3-main__buttons-item--white">{{$t('button.signUp')}}</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ww3-main'
}
</script>

<style lang="scss">
$b: '.ww3-main';

#{$b} {
  position: relative;
  height: 100%;

  video {
    width: 100%;
    height: 100%;
    position: absolute;
    left: 0;
    top: 0;
    object-fit: cover;
    object-position: top;
  }

  &__wrapper {
    position: relative;
    display: flex;
    align-items: flex-end;
    justify-content: center;
    max-width: 1360px;
    width: 100%;
    height: 100%;
    margin: 0 auto;
    overflow: hidden;

    @media screen and (max-width: 969px) {
      background-color: #0d100d;
      padding: 0 10px;
    }
  }

  &__content {
    display: flex;
    justify-content: center;
    flex-direction: column;

    @media screen and (max-width: 969px) {
      position: relative;
      z-index: 4;
      margin-top: 233px;
    }
  }

  &__text {
    color: #ffffff;
    text-transform: uppercase;
    margin: 0 auto 54px;
    width: 75%;
    text-align: center;
    font-size: 24px;
    line-height: 26px;
    font-family: 'WW3 Inktrap', sans-serif;

    @media screen and (max-width: 969px) {
      text-align: start;
      width: 100%;
      margin: 0 0 30px;
    }
  }

  &__buttons {
    margin-bottom: 70px;

    @media screen and (max-width: 969px) {
      display: flex;
      flex-direction: column;
    }

    &-item {
      position: relative;
      display: inline-flex;
      align-items: center;
      padding: 3px 20px 0;
      height: 50px;
      text-transform: uppercase;
      text-decoration: none;
      cursor: pointer;
      border: 1px solid transparent;
      transition: all .15s linear;
      user-select: none;
      font-size: 18px;
      line-height: 18px;
      font-family: 'WW3 Inktrap', sans-serif;
      font-weight: 700;
      min-width: 304px;
      justify-content: space-between;
      text-align: left;
      clip-path: polygon(0 -5px,100% -5px,100% calc(100% - 12px),calc(100% - 12px) 100%,0 100%);
      color: #000;

      &:before {
        content: "";
        display: block;
        position: absolute;
        width: calc(100% + 2px);
        height: 1px;
        top: -5px;
        left: -1px;
      }

      &:hover {
        opacity: 0.6;
      }

      &--yellow {
        background-color: rgba(250, 212, 5, 1);
        z-index: 2;

        @media screen and (max-width: 969px) {
          margin-bottom: 21px;
        }

        &:before {
          background-color: rgba(250, 212, 5, 1);
        }
      }

      &--white {
        clip-path: polygon(100% -100%, 100% 75%, 96% 100%, 0% 100%, 4% 75%, 4% -100%);
        background-color: #ffffff;
        z-index: 1;
        margin-left: -17px;

        @media screen and (max-width: 969px) {
          margin-left: 0;
          clip-path: polygon(0 -5px,100% -5px,100% calc(100% - 12px),calc(100% - 12px) 100%,0 100%);
        }

        &:before {
          background-color: #ffffff;
        }
      }
    }
  }

  &__banner {
    position: absolute;
    width: 100%;
    z-index: 3;

    img {
      width: 100%;
    }
  }
}
</style>
