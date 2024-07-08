<?php

// app/Http/Requests/StoreSourceRequest.php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class StoreSourceRequest extends FormRequest
{
    public function authorize()
    {
        return true;
    }

    public function rules()
    {
        return [
            'name' => 'required|string|max:255',
            'url' => 'required|url|max:255',
            'rss_feed_url' => 'nullable|url|max:255',
        ];
    }
}
