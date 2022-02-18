<template>
  <footer class="ww3-footer">
    <div class="ww3-footer__wrapper">
      <div class="ww3-footer__content">
        <img src="assets/image/icon/social/fb.svg">
        <div class="ww3-footer__info">© 2022 The Farm 51 Group SA. Published by My.com B.V. under the MY.GAMES brand. All rights reserved. All trademarks are the property of their respective owners.</div>
        <div class="ww3-footer__privacy">
          <a href="" target="_blank">Terms of Use</a>
          <span class="ww3-footer__separator">-</span>
          <a href="" target="_blank">Privacy Policy</a>
          <span class="ww3-footer__separator">-</span>
          <a href="" target="_blank">EULA</a>
          <span class="ww3-footer__separator">-</span>
          <a href="" target="_blank">Cookie policy</a>
          <span class="ww3-footer__separator">-</span>
          <a href="" target="_blank">CCP Privacy Policy</a>
        </div>
        <ul class="ww3-footer__social">
          <li v-for="(item, idx) in social" :key="idx">
            <a href="" target="_blank">
              <img :src="require(`assets/image/icon/social/${item.src}.svg`)" :alt="item.src">
            </a>
          </li>
        </ul>
      </div>
      <div class="ww3-footer__content">
        <ul class="ww3-footer__limitations">
          <li v-for="(item, idx) in limitations" :key="idx">
            <img :src="require(`assets/image/icon/limitation/${item.src}.svg`)" :alt="item.src">
          </li>
        </ul>
        <ul class="ww3-footer__tm">
          <li v-for="(item, idx) in tm" :key="idx">
            <img :src="require(`assets/image/icon/tm/${item.src}.svg`)" :alt="item.src">
          </li>
        </ul>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'ww3-footer',
  data () {
    return {
      social: [
        {
          src: 'fb'
        },
        {
          src: 'discord'
        },
        {
          src: 'reddit'
        },
        {
          src: 'twitter'
        },
        {
          src: 'vk'
        },
        {
          src: 'youtube'
        }
      ],
      limitations: [
        {
          src: 'cero'
        },
        {
          src: 'pegi-18'
        },
        {
          src: 'pegi-16'
        },
        {
          src: 'pegi-16-de'
        },
        {
          src: 'teen'
        }
      ],
      tm: [
        {
          src: 'the_farm'
        },
        {
          src: 'my_games'
        }
      ]
    }
  }
}
</script>

<style lang="scss">
$b: '.ww3-footer';

#{$b} {
  width: 100%;
  background-color: #0d100d;
  color: rgba(255, 255, 255, 0.6);
  font-family: 'WW3 Sans', sans-serif;

  /*@include desktop {
    padding: 0 40px;
  }

  @include tablet {
    padding: 0 10px;
    position: relative;
    z-index: 5;
  }*/

  &__wrapper {
    max-width: 1440px;
    height: 100%;
    margin: auto;
    display: flex;
    flex-direction: column;
    border-top: 1px solid #433c12;
    padding: 32px 100px 39px;

    /*@include desktop {
      padding: 32px 0 39px;
    }*/
  }

  &__content {
    display: flex;
    justify-content: space-between;

    /*@include tablet {
      flex-direction: column;
    }*/

    &:not(:last-child) {
      margin-bottom: 26px;
    }

    & > div,
    & > ul {
      width: calc(100% / 3);

      /*@include tablet {
        width: auto;
      }*/
    }
  }

  &__info {
    font-size: 13px;
    line-height: 18px;
    padding-right: 50px;

    /*@include tablet {
      order: 2;
      margin-bottom: 20px;
    }*/
  }

  &__privacy {
    display: flex;
    flex-wrap: wrap;
    height: max-content;
    font-size: 13px;
    line-height: 18px;

    /*@include desktop {
      flex-wrap: wrap;
    }

    @include tablet {
      order: 3;
      justify-content: flex-start;
    }*/

    a {
      position: relative;
      color: rgba(255, 255, 255, 0.6);
      text-transform: uppercase;
      height: max-content;
      transition: color 0.2s ease-in;
      margin-bottom: 5px;
      font-family: 'WW3 Sans', sans-serif;

      &:before {
        content: '';
        position: absolute;
        bottom: 0;
        height: 1px;
        width: 100%;
        background-color: rgba(255, 255, 255, 0.6);
        transition: background-color 0.2s ease-in;
      }

      &:hover {
        opacity: 0.6;
      }

      &:hover:before {
        background-color: rgba(255, 255, 255, 0)
      }
    }
  }

  &__separator {
    margin: 0 5px;
    color: rgba(255,255,255,0.6);
    font-size: 13px;
    line-height: 18px;
  }

  &__social {
    display: flex;
    justify-content: flex-end;
    width: auto;

    /*@include tablet {
      order: 1;
      justify-content: flex-start;
      margin-bottom: 20px;
    }*/

    li {
      &:not(:last-child) {
        margin-right: 7px;
      }
      a {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 40px;
        height: 40px;
        border: 1px solid #2A2A2A;
      }
    }
  }

  &__limitations {
    display: flex;

    /*@include tablet {
      margin-bottom: 20px;
    }*/

    li {
      &:not(:last-child) {
        margin-right: 20px;
      }
    }
  }

  &__tm {
    display: flex;
    justify-content: flex-end;
    align-items: center;

    /*@include tablet {
      justify-content: flex-start;
    }*/

    li {
      &:not(:last-child) {
        margin-right: 10px;
      }
    }
  }
}

</style>
