<template>
  <div id="app">
    <MouseCursor>
      <ExamplePage />
    </MouseCursor>
  </div>
</template>

<script>
import MouseCursor from "./components/MouseCursor/MouseCursor";
import ExamplePage from "./components/ExamplePage/ExamplePage";

import './_App.scss';

export default {
  name: 'app',
  components: {
    ExamplePage,
    MouseCursor
  },
  data: () => ({
    isHover: false
  })
}
</script>
