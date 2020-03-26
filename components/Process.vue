<template>
  <div class="process container">
    <div class="grid">
      <strong class="process__tag" v-scrollanim="scrollanim">— Process</strong>

      <div class="process__spacer"></div>

      <h2 class="process__headline" v-scrollanim="scrollanim">Plan</h2>
      <div class="process__copy">
        <strong class="t3" v-scrollanim="scrollanim">Agile Development</strong>
        <p class="c-t2" v-scrollanim="scrollanim">Every project is unique and requires different tech stacks and resources. We assess project and build a team of developers that you need. We deploy the team to you - you get full access to the developers and work with them through your channels (or ours if you prefer). They are your Software Departament until you're done.</p>
      </div>

      <div class="process__spacer"></div>

      <h2 class="process__headline" v-scrollanim="scrollanim">Build</h2>
      <div class="process__copy">
        <strong class="t3" v-scrollanim="scrollanim">Project Sprints</strong>
        <p class="c-t2" v-scrollanim="scrollanim">Big projects get split into cycles and we're on board. We'll handle daily assignments, communication and reporting. You will easily track your project progress and budget burning. Direct access to developers helps when things don't go smooth, with early problem recognition and switching goals.</p>
      </div>

      <div class="process__spacer"></div>

      <h2 class="process__headline" v-scrollanim="scrollanim">Deliver</h2>
      <div class="process__copy">
        <strong class="t3" v-scrollanim="scrollanim">Continuous Deployments</strong>
        <p class="c-t2" v-scrollanim="scrollanim">We believe in visuals and there is no better way to showcase a project progress than continous deployments. Our developers will iterate on the features until they are done and production-ready so you can maintain client satisfaction.</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Process',
  data () {
    return {
      scrollanim: {
        name: 'trans-el-from-bottom-fade',
        delay: 200,
        stagger: true,
      },
    }
  },
}
</script>

<style lang="scss" scoped>
.process__tag {
  width: col(12);
}

.process__spacer {
  margin-top: 100px;
  width: col(12);
}

.process__headline {
  width: col(4);
}

.process__copy {
  width: col(6);

  strong { display: block; }
  p { margin-top: 20px; }
}

@media (max-width: 1024px) {
  .process__headline {
    width: col(12);
    font-size: 50px;
  }

  .process__copy {
    margin-top: 30px;
    width: col(12);
  }
}
</style>
