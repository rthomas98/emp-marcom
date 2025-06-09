<?php

namespace App\Filament\Widgets;

use App\Models\CaseStudy;
use App\Models\User;
use Filament\Widgets\StatsOverviewWidget as BaseWidget;
use Filament\Widgets\StatsOverviewWidget\Stat;

class StatsOverview extends BaseWidget
{
    protected function getStats(): array
    {
        return [
            Stat::make('Total Case Studies', CaseStudy::count())
                ->description('All case studies')
                ->descriptionIcon('heroicon-m-document-text')
                ->color('primary'),
                
            Stat::make('Published Case Studies', CaseStudy::where('status', 'published')->count())
                ->description('Publicly visible')
                ->descriptionIcon('heroicon-m-globe-alt')
                ->color('success'),
                
            Stat::make('Featured Case Studies', CaseStudy::where('is_featured', true)->count())
                ->description('Highlighted on homepage')
                ->descriptionIcon('heroicon-m-star')
                ->color('warning'),
                
            Stat::make('Total Users', User::count())
                ->description('Registered users')
                ->descriptionIcon('heroicon-m-users')
                ->color('info'),
        ];
    }
}
