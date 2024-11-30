<script setup>
  
  const screenPropertiesStore
    = defineScreenPropertiesStoreFromComposable () ()

  const { screenProperties } = storeToRefs (screenPropertiesStore)

</script>


<template>

  <article class="o-profile-text">

    <h1 class="o-font-en">Alle Menschen werden Brüder!</h1>


    <figure
      class="o-beethoven"
      :data-number-of-parts="screenProperties.ratioIndex"
    >

      <NuxtImg
        src="/images/beethoven.png"
        alt="Ludwig van Beethoven"
        :modifiers="{ b: '#110d0d', opacity: 1 }"
        loading="lazy"
      />

    </figure>


    <p
      v-for="p in $tm('pages.team.member.text')"
      :key="p"
    >{{ p }}</p>


    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam arcu libero, consectetur eget lacus eu, pellentesque malesuada sem. Aliquam erat volutpat. Phasellus blandit, enim ut porta facilisis, ex nisl venenatis lacus, vel finibus libero sem quis massa. Etiam blandit luctus volutpat. Etiam porttitor purus sem, sed imperdiet dui bibendum vel. In finibus, justo in condimentum elementum, justo lectus molestie diam, at vehicula elit massa sed velit. Sed eget ligula eu sem varius placerat. Sed elit risus, sodales ut cursus vel, efficitur quis neque.
    </p>

    <p>
      Donec id diam pulvinar, pulvinar felis sit amet, suscipit mauris. In sagittis at ex ut cursus. Nulla a interdum lacus. Curabitur eget orci vitae mauris blandit pretium. Quisque sem est, pellentesque a purus ac, laoreet viverra quam. Nullam nec libero maximus, gravida justo non, condimentum ligula. Suspendisse sit amet leo ipsum. Donec malesuada nisi dignissim, cursus tortor non, volutpat neque. Donec in erat scelerisque, pulvinar metus eu, lobortis odio. Praesent accumsan efficitur eros ac vestibulum. Duis a lacus quis elit vestibulum condimentum.
    </p>

    <p>
      Proin at vulputate tortor. Praesent at urna varius nisi viverra congue elementum sit amet ipsum. Vestibulum molestie consectetur diam sit amet rhoncus. Nullam vitae ipsum vitae justo consequat consequat. Suspendisse nisl magna, auctor et tristique ut, consequat a erat. Ut a mattis nulla. Nullam consectetur nisl sollicitudin mauris porta, tincidunt semper massa volutpat. Nulla at tincidunt magna. Quisque id velit et felis vulputate vestibulum. Morbi finibus nunc et libero hendrerit, vitae finibus elit rhoncus.
    </p>

    <p>
      In mi quam, ornare id sollicitudin a, molestie vel arcu. Sed ullamcorper ex eu feugiat placerat. Aliquam erat volutpat. Aenean dapibus mi ut lacinia maximus. Donec fermentum ultricies suscipit. Pellentesque dignissim quam sed gravida pellentesque. Nulla augue velit, dapibus a commodo ut, venenatis sed nunc. Fusce cursus sodales risus, in ultrices lacus posuere pulvinar. Nunc porta sagittis semper. Ut non lectus lacinia, gravida magna eu, facilisis dolor.
    </p>

    <p>
      Pellentesque facilisis commodo dapibus. Praesent facilisis ligula quam, ac lacinia nibh placerat sit amet. Etiam lectus sem, vulputate eu magna quis, interdum ornare lacus. Cras massa quam, congue vel mi quis, luctus malesuada felis. Donec iaculis ex sem, sed fermentum lorem bibendum ac. Etiam interdum imperdiet tempus. Nullam malesuada purus vel nisi bibendum, nec porttitor tortor mattis. Nullam varius eros ac lorem feugiat interdum. Quisque nec ultricies turpis, vel sollicitudin nibh. Cras aliquam, sapien vel fermentum condimentum, nisl sapien placerat est, ut tempus enim tortor id nisi.
    </p>

    <p>
      Nunc eget eleifend nibh. Integer bibendum, lectus vitae sagittis scelerisque, purus erat maximus diam, sit amet luctus mauris eros at mi. Donec leo urna, maximus vel bibendum et, imperdiet ac diam. Etiam imperdiet velit vel nibh auctor, a condimentum nibh efficitur. Morbi suscipit hendrerit lorem, in interdum mauris volutpat vulputate. Donec ullamcorper erat eget tristique tempor. Phasellus id consectetur ex. Sed sodales gravida orci, nec tempor ante posuere et. Vestibulum elit nisi, dapibus ut blandit ut, vulputate at elit. Quisque porttitor fermentum nunc, non aliquet arcu mollis quis.
    </p>

    <p>
      Etiam sapien orci, commodo nec aliquet fermentum, fermentum eu nunc. Vivamus varius sem ut dignissim euismod. Pellentesque id semper velit. Praesent rutrum nulla a metus interdum congue. Fusce semper elit at orci efficitur, et iaculis enim feugiat. Ut accumsan, magna ut bibendum elementum, est nisl sodales orci, in egestas mauris sem id felis. Morbi quis ex quam. Sed ornare non nunc ut pulvinar. Phasellus consequat dui id nulla sodales, sit amet venenatis purus cursus.
    </p>

    <p>
      Vivamus ac consequat arcu. Morbi non massa ornare, viverra risus vitae, volutpat purus. Nulla dictum blandit luctus. Vestibulum consectetur, libero at condimentum posuere, orci ligula venenatis nunc, nec suscipit ex felis nec arcu. In rhoncus justo orci, non tincidunt massa tristique in. Vivamus nec risus metus. Nunc eu magna enim. Mauris at sem diam. Sed quis vestibulum orci. Donec tincidunt neque quis est sagittis ornare.
    </p>

    <p>
      Mauris bibendum, nisi feugiat fringilla congue, arcu lacus eleifend arcu, quis ultricies quam diam quis lectus. Maecenas vitae justo laoreet, elementum dui sed, iaculis nunc. Donec at dolor magna. In scelerisque enim dapibus risus varius, ut laoreet massa laoreet. Nam sit amet quam in ante finibus fermentum. Aliquam a libero aliquet, sollicitudin lorem ac, tempus metus. Ut vulputate, neque feugiat aliquam pretium, sapien sem accumsan turpis, non dignissim dui sapien non turpis. Donec diam purus, congue at condimentum non, porta eu risus. In nec interdum dui, eu varius nibh. Praesent in enim vel nulla tincidunt vestibulum. Proin sit amet dapibus eros, et fringilla mi. Duis consequat dapibus elit non congue.
    </p>

    <p>
      Nullam dapibus pharetra enim imperdiet pretium. Etiam id rhoncus augue, id accumsan ligula. Curabitur a ultricies magna. Sed sed enim at mauris varius tempus eget eu mauris. Donec eget orci at orci rutrum condimentum nec vitae velit. Curabitur sed commodo tortor, quis blandit tortor. Nulla facilisi. Proin facilisis nulla a nunc egestas suscipit. Integer leo nunc, euismod venenatis velit et, euismod blandit odio.
    </p>

    <p>
      Cras placerat, tortor vitae consequat tincidunt, nibh urna tempus nisl, eget pharetra risus augue eget risus. Morbi aliquam arcu varius pharetra ornare. Cras nisi lectus, bibendum ac lectus a, tempus rutrum leo. Mauris tristique luctus justo. Cras congue odio at ultrices tristique. Duis malesuada felis eget diam sagittis suscipit. Integer nec dui ut eros dignissim sodales. Integer facilisis at quam vitae posuere. Duis et ex eleifend, venenatis urna eget, ultricies orci. Fusce vel purus vel dui maximus cursus. Fusce arcu dui, cursus faucibus orci nec, euismod blandit odio. Fusce ac finibus diam. Phasellus et luctus neque, at dignissim est. Praesent tincidunt massa sed blandit euismod. Sed malesuada urna non vestibulum eleifend.
    </p>

    <p>
      Pellentesque semper posuere nunc, ut viverra lorem. Donec ultricies odio purus, ullamcorper placerat nulla auctor id. In volutpat mauris vel semper porttitor. Curabitur mollis enim in urna viverra, eget iaculis dolor vulputate. Integer commodo quam ac ante porta consectetur nec sed justo. Mauris tincidunt condimentum orci. Cras eleifend dictum neque, ut hendrerit enim egestas at. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae;
    </p>

    <p>
      Nunc eu euismod lacus. Morbi metus lectus, blandit quis euismod vitae, fermentum ut ante. Vivamus sed purus et arcu efficitur pretium a efficitur justo. Interdum et malesuada fames ac ante ipsum primis in faucibus. Vestibulum eu nunc placerat, ullamcorper dolor vitae, molestie orci. Proin nec dolor a lorem blandit condimentum non vitae ligula. Nulla quam elit, luctus auctor dictum nec, tincidunt ac nisi. Pellentesque finibus nec odio nec faucibus. Sed pellentesque urna ut nibh volutpat eleifend. Nulla vestibulum, ipsum eget tincidunt porta, quam nisl eleifend enim, nec vestibulum eros neque eget lorem. Nulla non scelerisque magna. Aenean imperdiet bibendum ante eget dapibus. Morbi justo turpis, sollicitudin quis nulla sed, dictum feugiat eros. Suspendisse aliquet quam mauris, vel viverra lorem placerat non. Etiam ac vehicula sapien.
    </p>

    <p>
      Etiam interdum orci feugiat, egestas nibh eget, rutrum augue. Aliquam eu odio leo. Sed vel semper arcu, euismod consectetur nibh. Mauris quis vestibulum tortor, sit amet luctus ipsum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at hendrerit dolor. Donec a est neque. Etiam quis porttitor ligula. Nunc posuere venenatis justo, nec molestie sem porta eget. Aenean sagittis varius leo eget finibus. Suspendisse vitae mi magna.
    </p>

    <p>
      Quisque lectus risus, finibus eu turpis malesuada, rhoncus faucibus turpis. Duis hendrerit ultrices ultrices. Suspendisse blandit, ante tempus finibus elementum, purus risus dictum turpis, tempor pellentesque leo diam vitae augue. Suspendisse pulvinar eu turpis sed auctor. Nulla sed pharetra elit. Nulla molestie blandit velit laoreet sodales. Ut felis ex, ullamcorper quis tempus eu, malesuada ut quam. Proin eleifend at risus nec luctus. Etiam sed pretium metus. Sed sit amet diam sed justo bibendum dictum. Nulla facilisi. Quisque elementum arcu mi, ut facilisis libero imperdiet et.
    </p>

    <p>
      Duis vel mi at felis euismod tempor. Sed in sapien laoreet ipsum lacinia aliquam eget volutpat tortor. Fusce aliquet vulputate odio eu venenatis. In aliquam enim non massa efficitur rutrum. Phasellus lacinia molestie est, quis fermentum nisl porta pellentesque. Aliquam sed leo fringilla nisl sagittis finibus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras laoreet fringilla dignissim. Vestibulum eu lacinia mi, in eleifend dolor. Praesent eu nunc eget purus accumsan pulvinar vel molestie velit. Sed in eleifend purus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Mauris sit amet lacus in eros euismod imperdiet vel sit amet turpis.
    </p>

    <p>
      Fusce nibh mauris, volutpat at lectus a, egestas tincidunt urna. Duis pulvinar odio at arcu elementum, sed bibendum lectus feugiat. Morbi condimentum quam velit, vel pellentesque leo tristique sit amet. Maecenas quis ultricies turpis, ornare pharetra sapien. Cras rhoncus quam et ornare consectetur. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Etiam interdum urna orci, non pharetra mi auctor in. Proin odio magna, dapibus mattis nisl quis, interdum ultrices mauris. Nulla mollis ipsum et tellus euismod mollis. Cras ante metus, eleifend sed gravida sed, scelerisque vitae magna. Praesent augue nisl, condimentum eget scelerisque eu, hendrerit quis purus. Ut iaculis nulla at lectus auctor consectetur. In in tellus id ante commodo lobortis.
    </p>

    <p>
      Etiam interdum purus ligula, id hendrerit justo fringilla in. Vivamus semper venenatis arcu, nec fringilla risus tempus nec. Nulla molestie congue porta. Cras in est odio. Aliquam sodales, tellus ac fermentum consequat, dolor nunc placerat orci, eu rutrum nisl lectus sit amet risus. Fusce ullamcorper, purus at fringilla laoreet, nulla augue feugiat ligula, et volutpat nisi odio at augue. Maecenas sodales iaculis elit, in volutpat quam tempus a. Maecenas tincidunt luctus rhoncus. Sed venenatis venenatis augue, id accumsan ex. Suspendisse vulputate quam ut bibendum sollicitudin. Mauris ut fringilla ligula. Praesent tempus eros sed rhoncus laoreet. Etiam a porttitor lacus.
    </p>

    <p>
      Donec imperdiet tempor diam. Suspendisse odio lorem, vestibulum vitae laoreet a, lacinia at nunc. Fusce sit amet ex non elit efficitur sagittis. Nam porttitor fringilla erat sit amet iaculis. Donec dictum turpis nunc, ac pellentesque dolor rhoncus facilisis. Cras id faucibus mi. Ut scelerisque, erat sed egestas imperdiet, nisi sem euismod est, nec ullamcorper magna dolor non justo. Vivamus condimentum mi pharetra dictum semper.
    </p>

  </article>

</template>


<style
  scoped
  src="@/assets/sass/pages/team/member.sass"
  lang="sass"
></style>