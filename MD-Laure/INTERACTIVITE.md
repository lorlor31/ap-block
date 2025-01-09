# INTERACTIVTE DU BLOC

## Ajouter des eventListeners et des callbacks dans edit.js et viewScript

- Pour rendre le bloc interactif, on va rajouter du JS dans la fonction edit dans edit.js pour l'interaction côté éditeur (cf exemple du bloc **slogan**)
- Pour l'interaction côté frontend, il faut :
1. définir un script dans block.json à la clé "viewScript"
2. Y mettre les fonctions
3. Attention à bien attribuer les classes nécessaires avec ``useBlockProps.save()`pour écraser la classe par défaut

```js
<div  {...useBlockProps.save({// permet de rajouter la class custom 
                className: 'hover-text-block',
            })}>

```

## Comment utiliser un bloc custom dans PHP

### Via un shortcode