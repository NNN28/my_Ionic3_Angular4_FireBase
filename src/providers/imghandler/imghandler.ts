
import { Injectable } from '@angular/core';
import { File } from '@ionic-native/file';
import { FileChooser } from '@ionic-native/file-chooser';
import { FilePath } from '@ionic-native/file-path';
import firebase from 'firebase';
/*
  Generated class for the ImghandlerProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ImghandlerProvider {
  nativepath: any;
  firestore = firebase.storage();
  constructor(public filechooser: FileChooser) {
    console.log('Hello ImghandlerProvider Provider');
  }

 /*
  For uploading an image to firebase storage.
  Called from - profilepic.ts
  Inputs - None.
  Outputs - The image url of the stored image. 
   
   */
   uploadimage() {
     var promise = new Promise((resolve, reject) => {
         this.filechooser.open().then((url) => {
           (<any>window).FilePath.resolveNativePath(url, (result) => {
             this.nativepath = result;
             (<any>window).resolveLocalFileSystemURL(this.nativepath, (res) => {
               res.file((resFile) => {
                 var reader = new FileReader();
                 reader.readAsArrayBuffer(resFile);
                 reader.onloadend = (evt: any) => {
                   var imgBlob = new Blob([evt.target.result], { type: 'image/jpeg' });
                   var imageStore = this.firestore.ref('/profileimages').child(firebase.auth().currentUser.uid);
                   imageStore.put(imgBlob).then((res) => {
                     this.firestore.ref('/profileimages').child(firebase.auth().currentUser.uid).getDownloadURL().then((url) => {
                       resolve(url);
                     }).catch((err) => {
                         reject(err);
                     })
                   }).catch((err) => {
                     reject(err);
                   })
                 }
               })
             })
           })
       })
     })    
      return promise;   
   }
 
   grouppicstore(groupname) {
     var promise = new Promise((resolve, reject) => {
         this.filechooser.open().then((url) => {
           (<any>window).FilePath.resolveNativePath(url, (result) => {
             this.nativepath = result;
             (<any>window).resolveLocalFileSystemURL(this.nativepath, (res) => {
               res.file((resFile) => {
                 var reader = new FileReader();
                 reader.readAsArrayBuffer(resFile);
                 reader.onloadend = (evt: any) => {
                   var imgBlob = new Blob([evt.target.result], { type: 'image/jpeg' });
                   var imageStore = this.firestore.ref('/groupimages').child(firebase.auth().currentUser.uid).child(groupname);
                   imageStore.put(imgBlob).then((res) => {
                     this.firestore.ref('/profileimages').child(firebase.auth().currentUser.uid).child(groupname).getDownloadURL().then((url) => {
                       resolve(url);
                     }).catch((err) => {
                         reject(err);
                     })
                   }).catch((err) => {
                     reject(err);
                   })
                 }
               })
             })
           })
       })
     })    
      return promise;   
   }
 
  
   picmsgstore() {
    var promise = new Promise((resolve, reject) => {
        this.filechooser.open().then((url) => {
          (<any>window).FilePath.resolveNativePath(url, (result) => {
            this.nativepath = result;
            (<any>window).resolveLocalFileSystemURL(this.nativepath, (res) => {
              res.file((resFile) => {
                var reader = new FileReader();
                reader.readAsArrayBuffer(resFile);
                reader.onloadend = (evt: any) => {
                  var imgBlob = new Blob([evt.target.result], { type: 'image/jpeg' });
                  var uuid = this.guid();
                  var imageStore = this.firestore.ref('/picmsgs').child(firebase.auth().currentUser.uid).child('picmsg' + uuid);
                  imageStore.put(imgBlob).then((res) => {
                      resolve(res.downloadURL);
                    }).catch((err) => {
                        reject(err);
                    })
                  .catch((err) => {
                    reject(err);
                  })
                }
              })
            })
          })
      })
    })    
     return promise;   
  }

  guid() {
  function s4() {
    return Math.floor((1 + Math.random()) * 0x10000)
      .toString(16)
      .substring(1);
  }
  return s4() + s4() + '-' + s4() + '-' + s4() + '-' +
    s4() + '-' + s4() + s4() + s4();
}

}
