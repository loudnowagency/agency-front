<template>
  <footer class="footer c-bg2 c-border">
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
              class="footer__email c-ta"
              href="mailto:hi@loudnow.agency"
              target="_blank">
              <span class="c-t1">hi@loudnow.agency</span>
            </a>
          </div>
        </div>
        <div class="footer__meta c-t2 t6">
          ©{{year}} All right reserved.
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
  padding: 100px 0;
  border-top-style: solid;
  border-top-width: 1px;
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

.footer__meta {
  width: col(2);
  display: flex;
  align-items: center;
  height: 50px;
  margin-top: 50px;
}

@media (max-width: 1024px) {
  .footer {
    padding-top: 80px;
    padding-bottom: 80px;
    font-size: 12px;
  }

  .footer__grid {
    align-items: flex-start;
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

  .footer__meta {
    margin-top: 0;
    height: 70px;
    width: col(12);
  }
}
</style>
