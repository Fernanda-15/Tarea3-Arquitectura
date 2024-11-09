<!-- pages/authors_index.vue -->
<template>
    <div class="container">
       
         <HeaderView />
        
        <div class="row mt-4">
            <h1>Directores</h1>
            <p>En esta sección podrá observar la lista de directores involucrados con las peliculas animadas.</p>
        </div>
        <div class="row gx-5 gy-5">
            <div class="col-md-4 mb-4" v-for="director in directores" :key="director.id">
                <div class="card">
                    <img class="card-img-top" width="200" height="200" :src="director.image" />
                    <div class="card-body">
                        <h5 class="card-title">{{ director.nombre }}</h5>
                        <p class="card-text">${{ director.price }} x entrevista</p>
                       
                        <div class="d-flex justify-content-between">

                            <button @click="goToDirector(pelicula.id)" class="btn btn-primary text-decoration-none">
                                    Detalles 
                            </button>
                            <button
                                        class="snipcart-add-item btn btn-primary mt-3"
                                        :data-item-id="director.nombre"
                                        :data-item-name="director.nombre"
                                        :data-item-price="director.price"
                                        :data-item-url="director.image"
                                        :data-item-description="'Compra de ' + director.nombre"
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
const directores = (await queryContent('/director').only('body').findOne()).body;
const router = useRouter();

const goToDirector = (id) => {
  router.push(`/pelicula/${id}`);
};
</script>
