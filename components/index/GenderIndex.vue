<script>
export default {}
</script>

<template>
  <div class="gender">
    <div class="gender__men">
      <div class="gender__scale">
        <img src="../../assets/sex/mens.png" alt="" />
      </div>
      <div class="gender__title">Мужское</div>
    </div>
    <div class="gender__women">
      <div class="gender__scale">
        <img src="../../assets/sex/womens.png" alt="" />
      </div>
      <div class="gender__title">Женское</div>
    </div>
  </div>
</template>

<style lang="scss">
.gender {
  display: flex;
  justify-content: space-around;
  padding-bottom: 20px;
  padding-left: 50px;
  padding-right: 50px;

  &__men,
  &__women {
    position: relative;
    cursor: pointer;
  }

  &__scale {
    display: inline-block;
    overflow: hidden;
    border-radius: 30px;
    
  }

  &__men img,
  &__women img {
    overflow: hidden;
    border-radius: 30px;

    &:hover {
      transform: scale(1.02);
      transition: 0.5s;
    }
  }

  &__title {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: rgba(255, 255, 255, 0.493);
    font-size: 24px;
    font-weight: bold;
    text-shadow: 1px 1px rgba(0, 0, 0, 0.219);
    opacity: 0;
    transition: opacity 0.3s ease-in-out;
    pointer-events: none;
  }

  &__men:hover &__title,
  &__women:hover &__title {
    opacity: 1;
  }
}
</style>
