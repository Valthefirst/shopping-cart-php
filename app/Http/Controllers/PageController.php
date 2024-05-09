<?php

namespace App\Http\Controllers;

use App\Models\Category;
use App\Models\Item;
use Illuminate\Http\Request;
use Illuminate\Http\Response;

class PageController extends Controller
{
    public function getCategories(){
        $arryCategories = Category::all();
        return response($arryCategories, 200);
    }

    public function setCategory(Request $request){
        $fields = $request->validate([
            'name'        => 'required|string',
            'description' => 'required|string',
        ]);
        $category = Category::create([
            'name'        => $fields['name'],
            'description' => $fields['description']
        ]);

        return response($category, 201);
    }

    public function getItems(){
        $arryItems = Item::all();
        return response($arryItems, 200);
    }

    public function setItem(Request $request){
        $fields = $request->validate([
            'name'          => 'required|string',
            'description'   => 'required|string',
            //'image'         => 'nullable|max:1999',
            'price'         => 'required|numeric',//there is not validate double
            'category_id'   => 'required|integer'
        ]);

        /*if ($request->hasFile('image')) {
            $fields['image'] = base64_encode(file_get_contents($request->file('image')));
        }*/
    
        $item = Item::create($fields);

        return response($item, 201);
    }

    public function getItem($search){
        $arryItems = Item::where('name', 'LIKE', '%'.$search.'%')
                        ->orWhere('description', 'LIKE', '%'.$search.'%')
                        ->get();
        return response($arryItems, 200);
    }

    public function getItemsByCategory($search){
        $categories = Category::where('name', 'LIKE', '%'.$search.'%')->get();
        $items=[];
        if(sizeof($categories)>0){
            $idCat = $categories[0]->id;
            $items = Category::find($idCat)->items;
        }

        foreach ($items as $item) {
            // ...
        }
        return response($items, 200);
    }

    public function getCategoryByItem($search){
        $items = Item::where('name', 'LIKE', '%'.$search.'%')
                        ->orWhere('description', 'LIKE', '%'.$search.'%')
                        ->get();
        if(isset($items) && sizeof($items)>0){
            $idItem= $items[0]->id;
            $category = Item::find($idItem)->category;
            return response([$category], 201);
        }
        return response([],200);
    }
}
