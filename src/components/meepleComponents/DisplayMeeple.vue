<script>
import { meeplesDb } from "@/firebase.js";
import { doc, deleteDoc } from "firebase/firestore";

let nextId = 1;

export default {
  name: "DisplayMeeple",
  data(){
    return{
      documents: [],
      id: nextId++
    }
  },
  firestore: {
    documents:meeplesDb
  },
  methods: {

    updateMeeple(){
      console.log('this does jack shit')

      // db.collection('meeples').doc(this.documents.id)
      //     .update(this.documents)

      // documents.push(doc(meeplesDb, id))

      // documents.doc(this.documents.id)
      //     .update(this.documents)

      // db.collection('meeples').doc(meeplesDb, id)
      //     .update(this.document.description)
    },
    // async updateMeeple(id){
    //   console.log("jjjjjjjjjjjjjjjjjjjjjjjjjjjjjjj")
    //   await documents.push(doc(meeplesDb, id))
    //       // doc(meeplesDb, id).update(doc(meeplesDb, id))
    // },
    // updateMeeple(id) {
    //   console.log("jjjjjjjjjjjjjjjjjjjjjjjjjjjjj");
    //   document.push(doc.data())
    // },

    async deleteMeeple(id) {
      await deleteDoc(doc(meeplesDb, id));
    },
  }
}
</script>

<template>



  <div class="card p-2">
    <table class="table table-striped table-hover" id="tbl">
      <thead>
      <tr id="table-head" class="fs-5">
        <th scope="col">Name</th>
        <th scope="col"><span class="small-screen">Gender</span></th>
        <th scope="col">Role</th>
        <th scope="col"><span class="small-screen">Age</span></th>
        <th scope="col"></th>
        <th scope="col"></th>
      </tr>
      </thead>
      <tbody class="table-group-divider">
      <tr v-for="document in documents" :key="document.type" >
        <!-- meeple table content-->
        <td class="fs-5 pb-0"> {{ document.meepleName }} </td>
        <td class="fs-5 pb-0">
          <span class="small-screen"> {{ document.meepleGender }} </span>
        </td>
        <td class="fs-5 pb-0"> {{ document.meepleRole }} </td>
        <td class="fs-5 pb-0">
          <span class="small-screen"> {{ document.meepleAge }} </span>
        </td>

        <!-- delete btn -->
        <td class="pb-0"><p @click="deleteMeeple(document.id)" id="delete" class="btn btn-outline-none fw-bold fs-4 p-0 m-0">X</p></td>

        <!-- edit btn -->
        <td class="pb-0">
          <p class="pt-1" type="button" data-bs-toggle="modal" :data-bs-target="'#meepleModal' + document.id">
            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" class="bi bi-pencil-square" viewBox="0 0 16 16">
              <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/>
              <path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5z"/>
            </svg>
          </p>
        </td>

        <!-- meeple modal -->
        <div class="modal fade" :id="'meepleModal' + document.id" tabindex="-1" aria-labelledby="meepleModalLabel" aria-hidden="true">
          <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content">
              <div class="modal-header">
                <h1 class="modal-title fs-5" id="meepleModalLabel"> {{ document.meepleName }} </h1>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div class="modal-body">
                <label for="description" class="form-label"></label>
                <textarea type="text" class="form-control" id="description" :value="document.meepleDescription"></textarea>
              </div>
              <div class="modal-footer">
                <button @click="updateMeeple()" type="button" class="btn btn-primary" data-bs-dismiss="modal">Save changes</button>
              </div>
            </div>
          </div>
        </div>
      </tr>
      </tbody>
    </table>
  </div>




</template>

<style lang="scss" scoped>
@import "../../scss/variables";

.card{
  background: $dusty-db;
}

#delete{
  width: 10px;
  height: 10px;
  color: $delete;
}

#tbl{
  border-style: solid;
  border-width: 1px;
  margin-bottom: 0;
}

@media (max-width: 925px){
  .small-screen{
    display: none;
  }
}

</style>