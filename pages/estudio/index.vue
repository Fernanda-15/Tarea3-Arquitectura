<!-- pages/books.vue -->
<template>
    <div class="container">
        <HeaderView />
        <div class="row mt-4">
            <h1>Estudios</h1>
            <p>En esta sección podrá observar la lista de estudios involucrados con las peliculas animadas.</p>
        </div>
        <div class="row gx-5 gy-5">
            <div class="col-md-4 mb-4" v-for="estudio in estudios" :key="estudio.id">
                <div class="card">
                    <img class="card-img-top" width="200" height="200" :src="estudio.image" />
                    <div class="card-body">
                        <h5 class="card-title">{{ estudio.nombre }}</h5>
                        <p class="card-text">${{ estudio.price }} x producción completa</p>
                        
                        <button @click="goToEstudio(pelicula.id)" class="btn btn-primary text-decoration-none">
                                Detalles 
                        </button>

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
            </div>
            <!-- <NuxtLink class="col-3 text-decoration-none" :to="`/estudio/${estudio.id}`" v-for="estudio in estudios" 
                :key="estudio.id">-->
                
            <!-- </NuxtLink> -->
        </div>
    </div>
</template>
<script setup>
import { useRouter } from 'vue-router';
const estudios = (await queryContent('/estudio').only('body').findOne()).body;

const router = useRouter();

const goToEstudio = (id) => {
  router.push(`/estudio/${id}`);
};
</script>
