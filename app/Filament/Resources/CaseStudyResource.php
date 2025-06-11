<?php

namespace App\Filament\Resources;

use App\Filament\Resources\CaseStudyResource\Pages;
use App\Filament\Resources\CaseStudyResource\RelationManagers;
use App\Models\CaseStudy;
use Filament\Forms;
use Filament\Forms\Components\DatePicker;
use Filament\Forms\Components\FileUpload;
use Filament\Forms\Components\Repeater;
use Filament\Forms\Components\RichEditor;
use Filament\Forms\Components\Section;
use Filament\Forms\Components\Select;
use Filament\Forms\Components\TextInput;
use Filament\Forms\Components\Toggle;
use Filament\Forms\Form;
use Filament\Resources\Resource;
use Filament\Tables;
use Filament\Tables\Columns\IconColumn;
use Filament\Tables\Columns\ImageColumn;
use Filament\Tables\Columns\TextColumn;
use Filament\Tables\Filters\SelectFilter;
use Filament\Tables\Filters\TernaryFilter;
use Filament\Tables\Table;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\SoftDeletingScope;
use Illuminate\Support\Str;

class CaseStudyResource extends Resource
{
    protected static ?string $model = CaseStudy::class;

    protected static ?string $navigationIcon = 'heroicon-o-document-text';
    
    protected static ?string $navigationGroup = 'Content';
    
    protected static ?string $navigationLabel = 'Case Studies';
    
    protected static ?int $navigationSort = 3;

    public static function form(Form $form): Form
    {
        return $form
            ->schema([
                Section::make('Basic Information')
                    ->schema([
                        TextInput::make('title')
                            ->required()
                            ->maxLength(255)
                            ->live(onBlur: true)
                            ->afterStateUpdated(fn (string $operation, $state, Forms\Set $set) => $operation === 'create' ? $set('slug', Str::slug($state)) : null),
                            
                        TextInput::make('slug')
                            ->required()
                            ->maxLength(255)
                            ->unique(ignoreRecord: true),
                            
                        TextInput::make('client_name')
                            ->required()
                            ->maxLength(255),
                            
                        Select::make('industry')
                            ->required()
                            ->options([
                                'Technology' => 'Technology',
                                'Healthcare' => 'Healthcare',
                                'Finance' => 'Finance',
                                'Legal' => 'Legal',
                                'Education' => 'Education',
                                'E-commerce' => 'E-commerce',
                                'Manufacturing' => 'Manufacturing',
                                'Real Estate' => 'Real Estate',
                                'Hospitality' => 'Hospitality',
                                'Retail' => 'Retail',
                                'Entertainment' => 'Entertainment',
                                'Other' => 'Other',
                            ]),
                            
                        Select::make('service_type')
                            ->required()
                            ->options([
                                'Web Development' => 'Web Development',
                                'Mobile Development' => 'Mobile Development',
                                'E-commerce' => 'E-commerce',
                                'MVP Development' => 'MVP Development',
                                'Software Development' => 'Software Development',
                                'Backend Development' => 'Backend Development',
                                'Frontend Development' => 'Frontend Development',
                                'HubSpot Development' => 'HubSpot Development',
                                'Managed IT Services' => 'Managed IT Services',
                                'Other' => 'Other',
                            ]),
                            
                        DatePicker::make('completion_date'),
                        
                        TextInput::make('website_url')
                            ->url()
                            ->maxLength(255),
                    ])->columns(2),
                    
                Section::make('Case Study Content')
                    ->schema([
                        RichEditor::make('challenge')
                            ->required()
                            ->toolbarButtons([
                                'bold', 'italic', 'underline', 'strike', 'link', 'bulletList', 'orderedList',
                                'h2', 'h3', 'paragraph', 'blockquote',
                            ])
                            ->columnSpanFull(),
                            
                        RichEditor::make('solution')
                            ->required()
                            ->toolbarButtons([
                                'bold', 'italic', 'underline', 'strike', 'link', 'bulletList', 'orderedList',
                                'h2', 'h3', 'paragraph', 'blockquote',
                            ])
                            ->columnSpanFull(),
                            
                        RichEditor::make('results')
                            ->required()
                            ->toolbarButtons([
                                'bold', 'italic', 'underline', 'strike', 'link', 'bulletList', 'orderedList',
                                'h2', 'h3', 'paragraph', 'blockquote',
                            ])
                            ->columnSpanFull(),
                    ]),
                    
                Section::make('Testimonial')
                    ->schema([
                        RichEditor::make('testimonial')
                            ->toolbarButtons([
                                'bold', 'italic', 'underline', 'strike', 'link',
                                'paragraph', 'blockquote',
                            ])
                            ->columnSpanFull(),
                            
                        TextInput::make('testimonial_author')
                            ->maxLength(255),
                            
                        TextInput::make('testimonial_position')
                            ->maxLength(255),
                    ])->columns(2),
                    
                Section::make('Media')
                    ->schema([
                        FileUpload::make('featured_image')
                            ->required()
                            ->image()
                            ->disk('public')
                            ->directory('case-studies/featured')
                            ->maxSize(2048)
                            ->visibility('public')
                            ->preserveFilenames()
                            ->columnSpanFull(),
                            
                        FileUpload::make('logo')
                            ->image()
                            ->disk('public')
                            ->directory('case-studies/logos')
                            ->preserveFilenames()
                            ->maxSize(2048),

                        Repeater::make('gallery_images')
                            ->label('Gallery Images')
                            ->schema([
                                FileUpload::make('src')
                                    ->label('Image')
                                    ->image()
                                    ->disk('public')
                                    ->directory('case-studies/gallery')
                                    ->preserveFilenames()
                                    ->maxSize(2048)
                                    ->required(),
                                TextInput::make('alt')
                                    ->label('Alt Text')
                                    ->maxLength(255),
                            ])
                            ->columns(1)
                            ->addActionLabel('Add Image to Gallery')
                            ->columnSpanFull(),
                    ]),
                    
                Section::make('SEO & Settings')
                    ->schema([
                        TextInput::make('meta_title')
                            ->maxLength(60),
                            
                        TextInput::make('meta_description')
                            ->maxLength(160),
                            
                        Select::make('status')
                            ->required()
                            ->options([
                                'draft' => 'Draft',
                                'published' => 'Published',
                            ])
                            ->default('draft'),
                            
                        Toggle::make('is_featured')
                            ->label('Feature this case study')
                            ->default(false),
                    ])->columns(2),
            ]);
    }

    public static function table(Table $table): Table
    {
        return $table
            ->columns([
                ImageColumn::make('featured_image')
                    ->square()
                    ->label('Image'),
                    
                TextColumn::make('title')
                    ->searchable()
                    ->sortable(),
                    
                TextColumn::make('client_name')
                    ->searchable()
                    ->sortable(),
                    
                TextColumn::make('industry')
                    ->searchable()
                    ->sortable(),
                    
                TextColumn::make('service_type')
                    ->searchable()
                    ->sortable(),
                    
                IconColumn::make('is_featured')
                    ->boolean()
                    ->sortable(),
                    
                TextColumn::make('status')
                    ->badge()
                    ->color(fn (string $state): string => match ($state) {
                        'published' => 'success',
                        'draft' => 'gray',
                    })
                    ->sortable(),
                    
                TextColumn::make('created_at')
                    ->dateTime()
                    ->sortable()
                    ->toggleable(isToggledHiddenByDefault: true),
                    
                TextColumn::make('updated_at')
                    ->dateTime()
                    ->sortable()
                    ->toggleable(isToggledHiddenByDefault: true),
            ])
            ->filters([
                SelectFilter::make('industry')
                    ->options([
                        'Technology' => 'Technology',
                        'Healthcare' => 'Healthcare',
                        'Finance' => 'Finance',
                        'Education' => 'Education',
                        'E-commerce' => 'E-commerce',
                        'Manufacturing' => 'Manufacturing',
                        'Real Estate' => 'Real Estate',
                        'Hospitality' => 'Hospitality',
                        'Entertainment' => 'Entertainment',
                        'Other' => 'Other',
                    ]),
                    
                SelectFilter::make('service_type')
                    ->options([
                        'Web Development' => 'Web Development',
                        'Mobile Development' => 'Mobile Development',
                        'E-commerce' => 'E-commerce',
                        'MVP Development' => 'MVP Development',
                        'Software Development' => 'Software Development',
                        'Backend Development' => 'Backend Development',
                        'Frontend Development' => 'Frontend Development',
                        'HubSpot Development' => 'HubSpot Development',
                        'Managed IT Services' => 'Managed IT Services',
                        'Other' => 'Other',
                    ]),
                    
                SelectFilter::make('status')
                    ->options([
                        'draft' => 'Draft',
                        'published' => 'Published',
                    ]),
                    
                TernaryFilter::make('is_featured')
                    ->label('Featured')
                    ->indicator('Featured'),
            ])
            ->actions([
                Tables\Actions\ViewAction::make(),
                Tables\Actions\EditAction::make(),
            ])
            ->bulkActions([
                Tables\Actions\BulkActionGroup::make([
                    Tables\Actions\DeleteBulkAction::make(),
                ]),
            ]);
    }

    public static function getRelations(): array
    {
        return [
            //
        ];
    }

    public static function getPages(): array
    {
        return [
            'index' => Pages\ListCaseStudies::route('/'),
            'create' => Pages\CreateCaseStudy::route('/create'),
            'view' => Pages\ViewCaseStudy::route('/{record}'),
            'edit' => Pages\EditCaseStudy::route('/{record}/edit'),
        ];
    }
}
