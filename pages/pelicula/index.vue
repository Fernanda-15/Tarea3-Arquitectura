<!-- pages/peliculas_index.vue -->
<template>
    <div hidden id="snipcart" data-api-key="import.meta.env.VITE_SNIPCART_API_KEY"></div>

    <div class="container">
        <HeaderView />
        <h3 style="margin-top: 15px">Peliculas Animadas</h3>
        <p>En está sección podrá observar la lista de peliculas animadas</p>
            <div class="row">
                <div class="col-md-4 mb-4" v-for="pelicula in peliculas" :key="pelicula.id">
                    <NuxtLink :to="`pelicula/${pelicula.id}`" class="card-link  text-decoration-none">
                        <div class="card" style="width: 18rem;">
                            <img :src="pelicula.img" class="card-img-top" alt="Pelicula" style="height: 300px; object-fit: cover;">
                            <div class="card-body">
                            <h5 class="card-title">{{ pelicula.title }}</h5>
                            <p class="card-text">{{ pelicula.description }}</p>
                            <p class="card-text">${{ pelicula.price }}</p>
                            <!-- Optional: Button for items on the main page -->
                            <button
                                class="snipcart-add-item btn btn-primary mt-3"
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
                    </NuxtLink>

                </div>
            </div>       
        <FooterView />
    </div>
</template>

<script setup>
const data = await queryContent('/pelicula').only('body').findOne() 
const peliculas = data.body;
</script>