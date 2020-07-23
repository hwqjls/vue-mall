<template>
  <div id="Sekeleton">
    <content-loader :width="414"
                    :height="836"
                    :speed="1.5"
                    primaryColor="#f3f3f3"
                    secondaryColor="#ecebeb">
      <rect x="6" y="18" rx="5" ry="5" width="100" height="20"/>
      <rect x="123" y="17" rx="0" ry="0" width="282" height="20" />
      <rect x="6" y="54" rx="0" ry="0" width="400" height="110" />
      <rect x="7" y="176" rx="0" ry="0" width="400" height="125" />

      <circle cx="36" cy="329" r="15" />
      <rect x="13" y="352" rx="0" ry="0" width="51" height="5" />
      <circle cx="124" cy="329" r="15" />
      <rect x="101" y="352" rx="0" ry="0" width="51" height="5" />
      <circle cx="211" cy="329" r="15" />
      <rect x="184" y="352" rx="0" ry="0" width="51" height="5" />
      <circle cx="289" cy="329" r="15" />
      <rect x="263" y="352" rx="0" ry="0" width="51" height="5" />
      <circle cx="371" cy="329" r="15" />
      <rect x="345" y="352" rx="0" ry="0" width="51" height="5" />
      <circle cx="37" cy="394" r="15" />
      <rect x="11" y="423" rx="0" ry="0" width="51" height="5" />
      <circle cx="126" cy="394" r="15" />
      <rect x="101" y="423" rx="0" ry="0" width="51" height="5" />
      <circle cx="213" cy="394" r="15" />
      <rect x="195" y="424" rx="0" ry="0" width="52" height="0" />
      <rect x="187" y="423" rx="0" ry="0" width="51" height="5" />
      <circle cx="288" cy="394" r="15" />
      <rect x="263" y="423" rx="0" ry="0" width="51" height="5" />
      <circle cx="371" cy="394" r="15" />
      <rect x="347" y="423" rx="0" ry="0" width="51" height="5" />

      <rect x="13" y="449" rx="0" ry="0" width="100" height="18" />
      <rect x="13" y="480" rx="0" ry="0" width="380" height="18" />

      <rect x="13" y="513" rx="0" ry="0" width="80" height="80" />
      <rect x="153" y="514" rx="0" ry="0" width="80" height="80" />
      <rect x="314" y="514" rx="0" ry="0" width="80" height="80" />

      <rect x="13" y="621" rx="0" ry="0" width="100" height="18" />
      <rect x="13" y="655" rx="0" ry="0" width="382" height="76" />
      
      <rect x="50" y="805" rx="0" ry="0" width="140" height="5" />
      <rect x="50" y="737" rx="0" ry="0" width="140" height="60" />
      <rect x="50" y="816" rx="0" ry="0" width="140" height="5" />
      <rect x="50" y="827" rx="0" ry="0" width="140" height="5" />

      <rect x="225" y="737" rx="0" ry="0" width="140" height="60" />
      <rect x="225" y="807" rx="0" ry="0" width="140" height="5" />
      <rect x="225" y="818" rx="0" ry="0" width="140" height="5" />
      <rect x="225" y="827" rx="0" ry="0" width="140" height="5" />
    </content-loader>
  </div>
</template>

<script>
import { ContentLoader } from 'vue-content-loader'

export default {
  name: 'Skeleton',
  data () {
    return {
      width: 414
    }
  },
  components: {
    ContentLoader
  }
}
</script>

<style>
</style>