export const register = {
 provide() {
   return {
     registerTransformation: this.registerTransformation,
   }
 },
 data() {
   return {
     extraTransformations: [],
   }
 },
 methods: {
   registerTransformation(options) {
     this.extraTransformations.push(options);
   },
 }
} 
