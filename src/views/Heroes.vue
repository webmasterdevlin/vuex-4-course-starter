<template>
  <div class="container-fluid mb-5">
    <h1>Heroes Works!</h1>
    <div class="d-flex flex-row justify-content-start">
      <div class="mb-2">
        <h2>Create Hero Form Here</h2>
      </div>
    </div>
    <div class="d-flex flex-row justify-content-center">
      <!-- reusable, can be separated to its own file -->
      <div
        class="spinner-border"
        style="width: 6rem; height: 6rem; color: purple"
        role="status"
      ></div>
    </div>
    <section>
      <!-- reusable, can be separated to its own file -->
      <div>
        <div class="card mt-3" style="width: auto">
          <div class="card-header">
            <div class="d-flex flex-row justify-content-start">
              <div class="mb-2">
                <h2>Update Hero Form Here</h2>
              </div>
            </div>

            <div>
              <h3 class="card-title">firstName lastName</h3>
              <h5 class="card-subtitle mb-2 text-muted">house</h5>
              <p class="card-text">knownAs</p>
            </div>
          </div>

          <section class="card-body">
            <div>
              <button class="btn btn-info card-link col text-center">
                Cancel
              </button>
              <button class="btn btn-primary card-link col text-center">
                Edit
              </button>
              <button class="btn btn-outline-danger card-link col text-center">
                Delete
              </button>
            </div>
          </section>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import Form from "@/components/Form";
import { ref } from "vue";

export default {
  name: "Heroes",
  components: { Form },

  // Vue 2
  /*
  data: () => ({
      heroForm: {
        id: "",
        firstName: "",
        lastName: "",
        house: "",
        knownAs: "",
      },

      editingTracker: "0",
    }),
  */

  // Vue 3
  setup() {
    const heroForm = ref({
      id: "",
      firstName: "",
      lastName: "",
      house: "",
      knownAs: "",
    });
    const editingTracker = ref("0");

    return {
      heroForm,
      editingTracker,
    };
  },

  computed: {},

  methods: {
    /* In html template or in code
    onSubmitHero() {
      this.addHeroAction(this.heroForm);
      this.heroForm = {};
    },
    */
  },

  mounted() {},
};
</script>

<style scoped></style>
