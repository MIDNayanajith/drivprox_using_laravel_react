<?php
namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Product;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;

class ProductController extends Controller
{
    public function index()
    {
        $products = Product::orderBy('created_at', 'desc')->paginate(10);
        return response()->json($products);
    }

    public function dashboardStats()
    {
        $totalProducts = Product::count();
        $activeProducts = Product::active()->count();
        $featuredProducts = Product::featured()->count();
        $recentProducts = Product::orderBy('created_at', 'desc')->take(5)->get();

        return response()->json([
            'totalProducts' => $totalProducts,
            'activeProducts' => $activeProducts,
            'featuredProducts' => $featuredProducts,
            'recentProducts' => $recentProducts,
        ]);
    }

    public function homeProducts()
    {
        $fastMovingProducts = Product::active()->fastMoving()->orderBy('created_at', 'desc')->take(6)->get();
        $featuredProducts = Product::active()->featured()->take(6)->get();

        return response()->json([
            'fastMovingProducts' => $fastMovingProducts,
            'featuredProducts' => $featuredProducts,
        ]);
    }

    public function store(Request $request)
    {
        $request->validate([
            'name' => 'required|string|max:255',
            'description' => 'required|string',
            'price' => 'required|numeric|min:0',
            'original_price' => 'nullable|numeric|min:0',
            'image' => 'required|image|mimes:jpeg,png,jpg,gif|max:2048',
            'reviews_count' => 'nullable|integer|min:0',
            'rating' => 'nullable|numeric|min:0|max:5',
            'is_featured' => 'nullable|boolean',
            'is_active' => 'nullable|boolean',
            'category' => 'required|string',
        ]);

        $data = $request->all();

        // Fix boolean handling
        $data['is_active'] = filter_var($request->input('is_active', true), FILTER_VALIDATE_BOOLEAN);
        $data['is_featured'] = filter_var($request->input('is_featured', false), FILTER_VALIDATE_BOOLEAN);

        if ($request->hasFile('image')) {
            $data['image'] = $request->file('image')->store('products', 'public');
        }

        $product = Product::create($data);

        return response()->json(['message' => 'Product created successfully', 'product' => $product], 201);
    }

    public function show(Product $product)
    {
        return response()->json($product);
    }

    public function update(Request $request, Product $product)
    {
        $request->validate([
            'name' => 'required|string|max:255',
            'description' => 'required|string',
            'price' => 'required|numeric|min:0',
            'original_price' => 'nullable|numeric|min:0',
            'image' => 'nullable|image|mimes:jpeg,png,jpg,gif|max:2048',
            'reviews_count' => 'nullable|integer|min:0',
            'rating' => 'nullable|numeric|min:0|max:5',
            'is_featured' => 'nullable|boolean',
            'is_active' => 'nullable|boolean',
            'category' => 'required|string',
        ]);

        $data = $request->all();

        // Fix boolean handling
        $data['is_active'] = filter_var($request->input('is_active', true), FILTER_VALIDATE_BOOLEAN);
        $data['is_featured'] = filter_var($request->input('is_featured', false), FILTER_VALIDATE_BOOLEAN);

        if ($request->hasFile('image')) {
            if ($product->image) {
                Storage::disk('public')->delete($product->image);
            }
            $data['image'] = $request->file('image')->store('products', 'public');
        }

        $product->update($data);

        return response()->json(['message' => 'Product updated successfully', 'product' => $product]);
    }

    public function destroy(Product $product)
    {
        if ($product->image) {
            Storage::disk('public')->delete($product->image);
        }
        $product->delete();

        return response()->json(['message' => 'Product deleted successfully']);
    }
}
