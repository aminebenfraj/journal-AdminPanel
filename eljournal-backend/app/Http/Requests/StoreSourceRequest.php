<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;

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
            'rss_feed_url' => [
                'nullable',
                'url',
                'max:255',
                // Custom validation rule to check if it's a valid RSS feed URL
                function ($attribute, $value, $fail) {
                    if (!empty($value)) {
                        // Check if it's a valid RSS feed URL
                        if (!$this->isValidRSSFeedUrl($value)) {
                            $fail('The RSS Feed URL must be a valid RSS feed URL.');
                        }
                    }
                },
            ],
        ];
    }

    // Helper method to check if a URL is a valid RSS feed URL
    private function isValidRSSFeedUrl($url)
    {
        // Regex pattern to match common RSS feed URL formats
        $pattern = '/\/(feed|rss|rss.xml)$/i';
        return preg_match($pattern, $url);
    }
}
