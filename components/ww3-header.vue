<template>
  <div class="ww3-header">
    <div class="ww3-header__wrap">
      <div class="ww3-header__logo">
        <a href="https://worldwar3.com/">
          <img src="https://ww3-static.prod-my.games/images/navigation_logo.svg?81032f962bed797fea8d164b27015f08" alt="ww3">
        </a>
      </div>
      <div class="ww3-header__navigation _g-visible-tablet">
        <choise-lang class="ww3-header__navigation-lang" />
      </div>
      <div class="ww3-header__navigation-dropdown">
        <div class="ww3-header__reg-current">
          <a href="" class="ww3-header__reg-link lang-register" v-html="$t('button.registration')" />
        </div>
      </div>
      <div class="ww3-header__panel _g-visible-desktop">
        <div class="ww3-header__lang">
          <div class="ww3-header__lang-current">
            <div>РУ</div>
          </div>
          <choise-lang class="ww3-header__dropdown-list" />
        </div>
        <div class="ww3-header__reg">
          <div class="ww3-header__reg-current">
            <a class="ww3-header__reg-link lang-register" href="" v-html="$t('button.registration')"/>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ChoiseLang from './choise-lang'

export default {
  name: 'ww3-header',
  components: {
    ChoiseLang
  }
}
</script>

<style lang="scss">
$b: '.ww3-header';

#{$b} {
  min-height: 50px;
  width: 100%;
  position: relative;
  top: 0;
  left: 0;
  background: #0d100d;
  border-bottom: 1px solid #433c12;
  z-index: 50;

  &__wrap {
    max-width: 1440px;
    height: 100%;
    margin: auto;
    display: flex;
    justify-content: space-between;
  }

  &__panel {
    display: flex;
  }

  &__lang {
    position: relative;
    border-left: 1px solid #433c12;
    border-right: 1px solid #433c12;

    &-current {
      display: flex;
      justify-content: center;
      align-items: center;
      cursor: pointer;
      user-select: none;
      height: 50px;

      div {
        text-transform: uppercase;
        font-size: 14px;
        line-height: 14px;
        font-family: 'WW3 Inktrap', sans-serif;
        font-weight: 700;
        color: #fad405;
        padding: 2px 20px 0;
      }
    }

    &:hover .ww3-header__dropdown-list {
      display: flex;
    }
  }

  &__logo {
    width: 100px;
    height: auto;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    border-right: 1px solid #433c12;
  }

  &__reg {
    position: relative;
    height: 100%;

    &-current {
      display: flex;
      justify-content: center;
      align-items: center;
      cursor: pointer;
      user-select: none;
      height: 50px;

      a {
        font-size: 14px;
        line-height: 14px;
        min-width: 140px;
        background: #fad405;
        color: #000;
        position: relative;
        display: inline-flex;
        justify-content: center;
        align-items: center;
        padding: 2px 20px 0;
        height: 50px;
        text-align: center;
        text-transform: uppercase;
        text-decoration: none;
        cursor: pointer;
        border: 1px solid transparent;
        -webkit-transition: all .15s linear;
        transition: all .15s linear;
        -webkit-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        user-select: none;
        font-weight: 700;
        font-family: 'WW3 Inktrap', sans-serif;

        @media screen and (max-width: 969px) {
          width: 100%;
        }

        &:hover {
          opacity: 0.6;
        }
      }
    }
  }

  &__dropdown {
    &-list {
      position: absolute;
      left: -1px;
      top: 50px;
      background: #121812;
      border-right: 1px solid #433c12;
      border-left: 1px solid #433c12;
      display: none;
      -webkit-box-orient: vertical;
      -webkit-box-direction: normal;
      -ms-flex-direction: column;
      flex-direction: column;
      width: max-content;

      li {
        border-bottom: 1px solid #433c12;
        padding-top: 2px;

        a {
          display: block;
          text-decoration: none;
          padding: 20px;
          text-transform: uppercase;
          color: #fad405;
          font-size: 14px;
          line-height: 14px;
          font-family: 'WW3 Inktrap', sans-serif;
          font-weight: 700;

          &:hover {
            opacity: 0.6;
          }
        }
      }
    }
  }

  &__navigation {
    display: flex;
    justify-content: center;
    align-items: center;
    border-left: 1px solid #433c12;
    width: 50px;
    cursor: pointer;

    &:before {
      content: "";
      display: block;
      width: 30px;
      height: 20px;
      background: linear-gradient(#fad405 2px, transparent 2px);
      background-size: 100% 9px;
      margin: 15px auto;
    }

    &-dropdown {
      position: absolute;
      top: 49px;
      display: none;
      background-color: #000000;
      width: 100%;

      &._show {
        display: block;
      }
    }

    &-lang {
      display: flex;
      justify-content: center;

      li {
        a {
          display: block;
          text-decoration: none;
          padding: 20px;
          text-transform: uppercase;
          color: #ffffff;
          font-size: 14px;
          line-height: 14px;
          font-family: 'WW3 Sans', sans-serif;
          font-weight: 700;

          &._current {
            color: #fad405;
          }
        }
      }
    }
  }
}
</style>
