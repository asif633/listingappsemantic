import { Injectable } from '@angular/core';
import { Product } from './product.model';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';
import { FirebaseApp } from 'angularfire2';
import 'firebase/storage';

@Injectable()
export class ProductService {

    private uid: string;
    private firebasestorage: any;

    initializeNew(): Product {
        return { name: '', sku: '', price: '', description: '', imageUrl: '', flipImageUrl: '' };
    }

    constructor(private afAuth: AngularFireAuth, private afd: AngularFireDatabase, fbApp: FirebaseApp) {
        this.afAuth.authState.subscribe(auth => {
            if (auth != undefined && auth != null)
                this.uid = auth.uid;
        }
        );
        this.firebasestorage = fbApp.storage();
    }

    addProduct(prod: Product, file: File, flip: File) {
        if (this.uid != undefined && this.uid != null) {
            let key = this.afd.list('products').$ref.ref.push().key;
            if (file != undefined && file != null) {
                this.firebasestorage.ref(`products` + `/` + key + `/` + prod.name).put(file).then(
                    snapshot => {
                        prod.imageUrl = snapshot.downloadURL;
                    }).then(
                    snapshot => {
                        if (flip != undefined && flip != null) {
                            this.firebasestorage.ref(`products` + `/` + key + '/' + 'flip' + prod.name).put(flip).then(
                                snapshot => {
                                    prod.flipImageUrl = snapshot.downloadURL;
                                    this.afd.object('products/' + key).set(prod);
                                }
                            );
                        }
                    }
                    );
            }
        }
    }

    updateProduct(prod: Product, file: File, flip: File) {
        if (this.uid != undefined && this.uid != null) {
            if (file != undefined && file != null) {
                this.firebasestorage.ref(`products` + `/` + prod.$key + `/` + prod.name).delete().then(
                    snapshot => {
                        this.firebasestorage.ref(`products` + `/` + prod.$key + `/` + prod.name).put(file).then(
                            snapshot => {
                                prod.imageUrl = snapshot.downloadURL;
                                if (flip != undefined && flip != null) {
                                    this.firebasestorage.ref(`products` + `/` + prod.$key + `/` + 'flip' + prod.name).delete().then(
                                        snapshot => {
                                            this.firebasestorage.ref(`products` + `/` + prod.$key + '/' + 'flip' + prod.name).put(flip).then(
                                                snapshot => {
                                                    prod.flipImageUrl = snapshot.downloadURL;
                                                    this.afd.object('products/' + prod.$key).update({ name: prod.name, sku: prod.sku, price: prod.price, description: prod.description, imageUrl: prod.imageUrl, flipImageUrl: prod.flipImageUrl })
                                                }
                                            );
                                        }
                                    )
                                }
                            });
                    }
                );
            }
            else if (file == undefined || file == null) {
                if (flip != undefined && flip != null) {
                    this.firebasestorage.ref(`products` + `/` + prod.$key + `/` + prod.name).delete().then(
                        snapshot => {
                            this.firebasestorage.ref(`products` + `/` + prod.$key + '/' + 'flip' + prod.name).put(flip).then(
                                snapshot => {
                                    prod.flipImageUrl = snapshot.downloadURL;
                                    this.afd.object('products/' + prod.$key).update({ name: prod.name, sku: prod.sku, price: prod.price, description: prod.description, imageUrl: prod.imageUrl, flipImageUrl: prod.flipImageUrl });
                                }
                            );
                        }
                    )
                }
            }
            else {
                this.afd.object('products/' + prod.$key).update({ name: prod.name, sku: prod.sku, price: prod.price, description: prod.description, imageUrl: prod.imageUrl, flipImageUrl: prod.flipImageUrl });
            }
        }
    }

    getProducts(): Observable<Product[]> {
        return this.afd.list('products');
    }

    deleteProduct(cas: Product) {
        if (this.uid != undefined && this.uid != null) {
            return this.afd.list('products').remove(cas.$key).then(
                onResolve => {
                    this.firebasestorage.ref(`products` + `/` + cas.$key + `/` + cas.name).delete();
                    this.firebasestorage.ref(`products` + `/` + cas.$key + '/' + 'flip' + cas.name).delete();
                }
            );
        }
    }

}