<!-- pages/peliculas_index.vue -->
<template>
    <div class="container">
        <div hidden id="snipcart" data-api-key="M2QzOWJhN2YtZTQxOC00OTViLWJmZDAtNjc0YWRlMTUzNGQ2NjM4NjYwOTAyMzE2MTA4NjY1"></div>
        
        <HeaderView />
        <h3 style="margin-top: 15px">Peliculas Animadas</h3>
        <p>En está sección podrá observar la lista de peliculas animadas</p>
            <div class="row">
                <div class="col-md-4 mb-4" v-for="pelicula in peliculas" :key="pelicula.id">
                        <div class="card" style="width: 18rem;">
                            <img :src="pelicula.img" class="card-img-top" alt="Pelicula" style="height: 300px; object-fit: cover;">
                            <div class="card-body">
                            <h5 class="card-title">{{ pelicula.title }}</h5>
                            <p class="card-text">{{ pelicula.description }}</p>
                            <p class="card-text">${{ pelicula.price }}</p>
                            
                            <div class="d-flex justify-content-between">
                                <button @click="goToPelicula(pelicula.id)" class="btn btn-primary text-decoration-none">
                                    Detalles 
                                </button>
                                <button
                                    class="snipcart-add-item btn btn-primary"
                                    :data-item-id="pelicula.title"
                                    :data-item-name="pelicula.title"
                                    :data-item-price="pelicula.price"
                                    :data-item-url="pelicula.img"
                                    :data-item-description="'Compra de ' + pelicula.title"
                                >
                                    Añadir al carrito
                                </button>
                            </div>

                        </div>

                        </div>

                </div>
            </div>       
        <FooterView />
    </div>
</template>

<script setup>
import { useRouter } from 'vue-router';
const data = await queryContent('/pelicula').only('body').findOne(); 
const peliculas = data.body;

const router = useRouter();

const goToPelicula = (id) => {
  router.push(`/pelicula/${id}`);
};
</script>
