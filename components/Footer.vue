<template>
  <footer class="footer c-bg1">
    <div class="footer__section section c-border">
      <div class="footer__area-1">
          <div class="container">
            <div class="grid">
              <div class="footer__info -i1">
                <h5>Office</h5>
                <p class="c-t2 ">
                  Grzybowska 62 <br>
                  Warsaw, 00-855 <br>
                  Poland
                </p>
              </div>
              <div class="footer__info -i2">
                <h5>Contacts</h5>
                <p class="">
                  <a href="mailto:hi@loudnow.agency">hi@loudnow.agency</a> <br>
                  <a href="tel:+48-733-429-048">+48 733 429 048</a> <br>
                  &nbsp;
                </p>
              </div>
              <div class="footer__box">
                <div class="footer__cta t2">
                  <p><strong>Drop us a line or two, we are open for creative minds and collaborations</strong></p>
                  <a
                    class="footer__email"
                    href="mailto:hi@loudnow.agency">
                    hi@loudnow.agency
                  </a>
                </div>
              </div>
            </div>
          </div>
      </div>

      <div class="footer__area-2 c-border"></div>

      <div class="footer__area-3">
        <div class="container">
          <div class="footer__grid grid">
            <div class="footer__meta c-t2 t6">
              ©{{year}} All right reserved.
            </div>
          </div>
        </div>
      </div>

    </div>
  </footer>
</template>

<script>
export default {
  name: 'Footer',
  computed: {
    year () {
      return new Date().getFullYear()
    },
  },
}
</script>

<style lang="scss" scoped>
.footer {
  padding-top: 200px;
  padding-bottom: 150px;
}

.footer__section {
  border-width: 1px;
  border-style: solid;
}

.footer__area-1 {
  padding: 100px 0;
}

.footer__area-2 {
  height: 120px;
  border-top-width: 1px;
  border-top-style: solid;
  border-bottom-width: 1px;
  border-bottom-style: solid;
}

.footer__area-3 {
  padding: 20px 0;
}

.footer__grid {
  align-items: center;
}

.footer__info {
  width: col(3);

  p { margin-top: 10px; }
}

.footer__box {
  width: col(6);
}

.footer__cta {
  padding: 0 100px;
}

.footer__email {
  position: relative;
  display: inline-block;
  padding: 5px 0;
  margin-top: 30px;
  @include underline(2);
}

.footer__separator {
  margin-top: 300px;
  width: col(12);
}

.footer__social,
.footer__meta {
  width: col(2);
}

.footer__social {
  transform: translateX(-10px);
  display: inline-flex;

  svg {
    height: 20px;
    width: 20px;
  }
}

.footer__meta {
  display: flex;
  align-items: center;
  height: 50px;
}

.footer__menu {
  width: col(8);

  .grid { justify-content: center; }
  a { padding: 10px 20px; }
}

@media (max-width: 1024px) {
  .footer {
    padding-top: 0;
    padding-bottom: 0;
    font-size: 12px;
  }

  .footer__section {
    border-width: 0;
  }

  .footer__grid {
    align-items: flex-start;
  }

  .footer__area-1 {
    display: flex;
    align-items: center;
    padding-top: 100px;
    padding-bottom: 100px;
    height: calc(100vh - 110px);
    max-height: 850px;
    min-height: 700px;
  }

  .footer__separator {
    display: none;
  }

  .footer__area-2 {
    height: 0px;
    border-bottom: none;
  }

  .footer__area-3 {
    padding: 20px 0;
  }

  .footer__cta {
    padding: 0;
  }

  .footer__box {
    margin-bottom: 100px;
    order: -2;
    width: col(12);
  }

  .footer__info {
    margin-bottom: 0;
    margin-left: push(1);

    &.-i1 {
      width: col(6);
      margin-left: push(0);
    }
    &.-i2 {
      width: col(6);
      margin-left: push(0);
    }
  }

  .footer__social,
  .footer__menu {
    display: none;
  }

  .footer__meta {
    margin-top: 0;
    height: 70px;
    width: col(12);
  }
}
</style>
