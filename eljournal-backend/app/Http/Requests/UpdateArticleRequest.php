<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class UpdateArticleRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true; // Assuming authorization logic here, if required
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            'title' => 'sometimes|required|string|max:255',
            'content' => 'sometimes|required|string',
            'published_at' => 'nullable|date',
            'category_id' => 'sometimes|required|exists:categories,id',
            'author_id' => 'sometimes|required|exists:authors,id',
            'source_id' => 'nullable|exists:sources,id',
        ];
    }
}
