<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use App\Http\Requests\Documents\StoreDocumentRequest;
use App\Http\Requests\Documents\UpdateDocumentRequest;
use App\Models\Document;
use Illuminate\Support\Facades\Log;

class DocumentController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        // Get the root documents (those without parent_id)
        $rootDocuments = Document::whereNull('parent_id')
            ->with('children')
            ->get();

        // Build the document tree recursively
        $documentTree = $this->buildDocumentTree($rootDocuments);
        return Inertia::render('dashboard', [
            'documentTree' => $documentTree,
        ]);
    }

    /**
     * Recursively build the document tree.
     */
    private function buildDocumentTree($documents)
    {
        $tree = [];

        foreach ($documents as $document) {
            $children = [];

            if ($document->children && $document->children->count() > 0) {
                // Load nested children recursively
                $childrenWithDescendants = Document::where('parent_id', $document->id)
                    ->with('children')
                    ->get();

                $children = $this->buildDocumentTree($childrenWithDescendants);
            }

            $tree[] = [
                'id' => $document->id,
                'title' => $document->title,
                'slug' => $document->slug,
                'children' => $children,
            ];
        }

        return $tree;
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create() {}

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreDocumentRequest $request)
    {
        //
    }

    /**
     * Display the specified resource.
     */
    public function show(Document $document)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Document $document)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateDocumentRequest $request, Document $document)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Document $document)
    {
        //
    }
}
