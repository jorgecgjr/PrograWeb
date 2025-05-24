<template>
<div class="containerDS row justify-content-center">
    <div class="btn-toolbar" role="toolbar" aria-label="Toolbar with button groups">
    <div class="btn-group col text-center" role="group" aria-label="Second group">
        <button type="button" class="btn btn-secondary" @click="refresh">Recargar</button>
        <button type="button" class="btn btn-secondary" @click="start">Iniciar</button>
        <button type="button" class="btn btn-secondary" @click="stop">Detener</button>
    </div>
    </div>
    <div class="row justify-content-center">
        <Dispositivo  v-for="(item,index) in dispositivos" :key="index" :identifica="item.identifica" :opera="item.opera"></Dispositivo>
    </div>
</div>
</template>
<script>
    import DSDispositivos from '@/servicios/dsDispositivos'
    import Dispositivo from '@/components/monitor/Dispositivo.vue'

    export default {
        name: 'ViewDispositivos',
        components: {
            Dispositivo
        },
        data() {
            return {
                nIntervId: null,
            }
        },
        computed: {
          dispositivos() {
            return this.$store.state.dispositivos
          }
        },
        methods:{
            refresh() {
                this.dispositivos.forEach((item,index)=>{
                    let desviacion=0.05
                    let voltaje = item.identifica.voltaje.minimo +
                                (((item.identifica.voltaje.maximo - item.identifica.voltaje.minimo) +
                                (item.identifica.voltaje.nominal * desviacion)) * Math.random())
                    let corriente = item.identifica.corriente.minimo +
                                (((item.identifica.corriente.maximo - item.identifica.corriente.minimo) +
                                (item.identifica.corriente.nominal * desviacion)) * Math.random())
                    let caudal = item.identifica.caudal.minimo +
                                (((item.identifica.caudal.maximo - item.identifica.caudal.minimo) +
                                (item.identifica.caudal.nominal * 0.10)) * Math.random())
                    
                    this.dispositivos[index].opera = {
                        voltaje: voltaje,
                        corriente: corriente,
                        caudal: caudal,
                        estatus: 1
                    }
                })                
            },
            start() {
                if (!this.nIntervId) {
                    this.nIntervId = setInterval(()=>{this.refresh()}, 1000);
                }
            },
            stop() {
                clearInterval(this.nIntervId);
                this.nIntervId = null;
            },
            nuevo(dispositivo) {
                this.dispositivos.push(disppsitovo)
            }
        },
        created () {
          //this.$store.
          this.$store.commit('setDispositivos', DSDispositivos.getListaDataStore())
          //DSDispositivos.init()
          //this.Dispositivos = DSDispositivos.getListaDataStore()
        }
    }
    </script>
    