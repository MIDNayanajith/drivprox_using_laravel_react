<?php
namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Product extends Model
{
    use HasFactory;

    protected $fillable = [
        'name', 'description', 'price', 'original_price',
        'image', 'reviews_count', 'rating', 'is_featured',
        'is_active', 'category'
    ];

    protected $casts = [
        'price' => 'decimal:2',
        'original_price' => 'decimal:2',
        'rating' => 'decimal:1',
        'is_featured' => 'boolean',
        'is_active' => 'boolean',
    ];

    public function getFormattedPriceAttribute()
    {
        return 'LKR ' . number_format($this->price, 0);
    }

    public function getFormattedOriginalPriceAttribute()
    {
        return $this->original_price ? 'LKR ' . number_format($this->original_price, 0) : null;
    }

    public function scopeActive($query)
    {
        return $query->where('is_active', true);
    }

    public function scopeFeatured($query)
    {
        return $query->where('is_featured', true);
    }

    public function scopeFastMoving($query)
    {
        return $query->where('category', 'fast_moving');
    }
}
