<!-- pages/books.vue -->
<template>
    <div hidden id="snipcart" data-api-key="import.meta.env.NUXT_SNIPCART_API_KEY"></div>

    <div class="container">
        <HeaderView />
        <div class="row mt-4">
            <h1>Estudios</h1>
            <p>En esta sección podrá observar la lista de estudios involucrados con las peliculas animadas.</p>
        </div>
        <div class="row gx-5 gy-5">
            <NuxtLink class="col-3 text-decoration-none" :to="`/estudio/${estudio.id}`" v-for="estudio in estudios"
                :key="estudio.id">
                <div class="card">
                    <img class="card-img-top" width="200" height="200" :src="estudio.image" />
                    <div class="card-body">
                        <h5 class="card-title">{{ estudio.nombre }}</h5>
                        <p class="card-text">${{ estudio.price }} x producción completa</p>
                        <!-- Optional: Button for items on the main page -->
                        <button
                                class="snipcart-add-item btn btn-primary mt-3"
                                :data-item-id="estudio.nombre"
                                :data-item-name="estudio.nombre"
                                :data-item-price="estudio.price"
                                :data-item-url="estudio.image"
                                :data-item-description="'Compra de ' + estudio.nombre"
                            >
                                Añadir al carrito
                        </button>
                    </div>

                </div>
            </NuxtLink>
        </div>
    </div>
</template>
<script setup>
const estudios = (await queryContent('/estudio').only('body').findOne()).body;
</script>
