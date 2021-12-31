
export interface Mappable{
    location:{
        lat:number,
        lng:number
};
markerContent():string;
color:string
}
export class CustomMap{

    private googleMap:  google.maps.Map;

    constructor(divId:string){
        this.googleMap =  new google.maps.Map(document.getElementById(divId),{
            zoom:1,
            center:{lat:0,lng:0}
        });
    }

    // === repeated code 1 ===

    // addUserMarker(user:User):void{
    //     new google.maps.Marker({
    //         map:this.googleMap,
    //         position:{
    //             lat:user.location.lat,
    //             lng:user.location.lng 
    //         }
    //     })

    // }

    // addCompanyMarker(company:Company):void{
    //     new google.maps.Marker({
    //         map:this.googleMap,
    //         position:{
    //             lat:company.location.lat,
    //             lng:company.location.lng
    //         }
    //     })

    // }

//    ===== repeated code 1 - solution 1 - not best solution though =======

    // addMarker(mappable:User|Company):void{
    //         new google.maps.Marker({
    //         map:this.googleMap,
    //         position:{
    //             lat:mappable.location.lat,
    //             lng:mappable.location.lng
    //         }
    //     })
    // }

    //    ===== repeated code 1 - better solution with interface=======

    addMarker(mappable:Mappable):void{
       const marker =  new google.maps.Marker({
        map:this.googleMap,
        position:{
            lat:mappable.location.lat,
            lng:mappable.location.lng
        }
    });
    marker.addListener('click',function(){
        const infowindow = new google.maps.InfoWindow({
            content:mappable.markerContent()
        });
        infowindow.open(this.googleMap,marker)
    })
}

}