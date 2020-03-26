<template>
  <div class="section c-bg2">
    <div class="container">

      <div class="grid">
        <h3 class="logo-wall__headline">Partners</h3>
        <div class="logo-wall__copy">
          <strong>— We worked with</strong>
          <p class="c-t2">Our favorite agencies are our friends. We help them to achieve their goals; they help us to stay sharp.</p>
        </div>
        <div class="logo-wall__logos">
          <div class="grid">
            <a
              v-for="({ logo }, i) in testimonials"
              class="logo"
              :class="{'-active': i === localActive}"
              :key="`logo-${i}`"
              @click="setActive(i)">
              <span class="logo-inner">
                <InlineSvg :src="`/logos/${logo}`" />
              </span>
            </a>
            <a></a>
          </div>
        </div>
      </div>

      <div
        v-for="(item, i) in testimonials"
        :key="`item-${i}`">
        <div
          v-if="i === localActive"
          class="testimonial grid">
          <div class="testimonial__img-wrap">
            <Picture
              class="testimonial__img"
              :src="`/images/${item.picture}`" />
          </div>

          <div class="testimonial__body">
            <div class="testimonial__meta">
              <h5>Author</h5>
              <p class="c-t2">
                <span>{{ item.author }},</span> <br>
                <span>{{ item.role }}</span>
              </p>
            </div>

            <strong class="testimonial__tag">
              — They Say
            </strong>

            <div class="testimonial__copy">
              <strong class="t2">{{ item.headline }}</strong>
              <p
                v-for="(text, i) in item.copy"
                :key="`testimonial-copy__${i}`"
                class="c-t2">
                {{ text }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import InlineSvg from 'vue-inline-svg'
import Corners from '@/components/ui/Corners'
import Picture from '@/components/ui/Picture'

export default {
  name: 'Testimonials',
  components: {
    Corners,
    Picture,
    InlineSvg,
  },
  props: {
    active: Number,
  },
  data () {
    return {
      localActive: null,
      scrollanim: {
        name: 'trans-el-from-bottom-fade',
        delay: 200,
        stagger: true,
      },
      testimonials: [
        {
          logo: 'xwp.svg',
          picture: 'testimonial-mike.jpg',
          author: 'Mike Crantea',
          role: 'Principal Engineer',
          headline: 'Working with Loud Now has been an absolute pleasure.',
          copy: [
            'They did a great job at creating stellar front-end based on custom designs, while also taking it the extra mile to provide feedback to the designer and bringing their own improvement to the table with polish, animations and over-all what you’d expect from someone with great UX skills and experience.',
            'One important differentiator is the ownership from the beginning until the end, and the care for detail which comes with them by default.',
            'I’m sure there will only be success stories coming out of the projects they’ll be handling.',
          ],
        },
        {
          logo: 'ds.svg',
          picture: 'testimonial-adam.jpg',
          author: 'Adam Chambers',
          role: 'Creative Tech Director',
          headline: 'We would highly recommend them as an experienced and professional development shop.',
          copy: [
            'We began working with Loud Now three years ago and they quickly became an integral part of our vendor network due to their lightning fast efficiency, excellent communication, and best in class development. We have collaborated on a number of projects, ranging from end to end Wordpress and CraftCMS websites, to collaborating as part of a larger team on custom built software.',
            'We have continued working with Loud Now team to this day and foresee this long term relationship continuing into the future. We would highly recommend them as an experienced and professional development shop as well as an excellent outsourced extension of an agency\'s in-house teams.',
          ],
        },
        {
          logo: 'artbees.svg',
          picture: 'testimonial-bob.jpg',
          author: 'Bob Ulusoy',
          role: 'Chief Product Officer',
          headline: 'Artbees recommends Loud Now as an expert in its field, and we are looking forward to working with them in the near future.',
          copy: [
            'My experience with Loud Now dates back to 2016 when we had some major challenges with our flagship WordPress theme called Jupiter. Making changes for a WP theme that powered hundreds of thousands of sites was a daunting task. But they have made several fundamental changes to our product.',
            'The outcome was extremely rewarding: many of our clients reported a more than 50% improvement in speed and performance.',
            'Loud Now developers were highly integrated into our team as if they were part of it. They delivered everything as planned, and we were so pleased with the collaboration that we even extended it for a long time.',
          ],
        },
      ],
    }
  },
  mounted () {
    this.setActive(this.active)
  },
  methods: {
    setActive (id) {
      this.localActive = id
    },
  },
}
</script>

<style lang="scss" scoped>
.section {
  padding: 150px 0;
  position: relative;
}

.corner {
  position: absolute;
  pointer-events: none;
  border-color: currentColor;
  border-style: solid;
  border-width: 0;
  width: 10px;
  height: 10px;

  &.-lines { top: 0; left: 0; border-left-width: 1px; border-top-width: 1px; width: 50%; height: 50%; opacity: .2; }
  &.-tl { top: 0; left: 0; border-left-width: 1px; border-top-width: 1px; }
  &.-tr { top: 0; right: 0; border-right-width: 1px; border-top-width: 1px; }
}

.logo-wall__headline {
  width: col(5);
  margin-right: push(1);
}

.logo-wall__copy {
  width: col(4);
  margin-left: push(1);

  p { margin-top: 10px; }
}

.logo-wall__logos {
  margin-top: 100px;
  width: col(12);
}

.logo {
  padding-right: 50px;
  width: col(4);
  display: flex;
  align-items: center;
  opacity: .5;
  transition: opacity .2s $ease;

  &:hover,
  &.-active { opacity: 1; }

  &:first-of-type { width: col(3); }

  svg {
    height: 30px;
    max-width: 100%;
  }
}

.logo-inner {
  position: relative;
  display: inline-block;
  padding: 10px 0;
  max-width: 60%;

  .-active & {
    @include underline(2);
    @include underline-anim-in;
  }
}

.testimonial {
  align-items: flex-start;
  margin-top: 150px;
}

.testimonial__img-wrap {
  width: col(6);
  display: flex;
}

.testimonial__img {
  width: 100%;
  object-fit: cover;
}

.testimonial__body {
  display: flex;
  flex-wrap: wrap;
  width: col(5);
  margin-left: push(1);
}

.testimonial__meta {
  width: col(6);

  p { margin-top: 30px; }
}

.testimonial__tag {
  width: col(6);
  text-align: right;
  line-height: 1;
}

.testimonial__copy {
  margin-top: 100px;
  width: col(12);

  strong { display: block; }
  p { margin-top: 30px; }
}


@media(max-width: 1024px) {
  .section {
    padding: 100px 0;
  }

  .logo-wall__headline {
    width: col(8);
  }

  .logo-wall__copy {
    margin-top: 50px;
    margin-left: 0;
    width: col(12);
  }

  .logo {
    margin-bottom: 20px;
    padding-right: 30px;
    width: col(12) !important;
  }

  .logo-inner {
    max-width: 100%;;
  }

  .testimonial {
    margin-top: 50px;
  }

  .testimonial__img-wrap {
    width: col(12);
  }

  .testimonial__img {
    width: 480px;
    height: 520px;
  }

  .testimonial__body {
    margin-top: 50px;
    margin-left: 0;
    width: col(12);
  }

  .testimonial__meta {
    width: col(12);
  }

  .testimonial__tag {
    display: none;
  }

  .testimonial__copy {
    width: col(12);
    margin-top: 50px;
  }
}
</style>
