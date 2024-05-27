"use client"
import React from 'react';
import Banner from "@/components/common/banner"
import News, { SecondNews } from '@/components/computer/news';
import Accessories from '@/components/computer/accessories';
import ProductBar from '@/components/computer/product-bar';
import Welcome from '@/components/common/welcome-section';
import ProductTabs from '@/components/computer/tab';
import ProductMacTypes from '@/components/computer/product-types';
import { motion } from "framer-motion"
import ProductCard from '@/components/computer/card';
import { desktop, display, laptop } from '@/faker/mac';
import Widget from '@/components/common/widget';
import WidgetData1 from '@/faker/widget';

function ProductPage() {
    return (
        <div className=' w-full'>
            <Banner />
            <Welcome title='Mac' subtitle='If you can dream it, Mac can do it' />
            <Widget data={WidgetData1} />
        </div>
    )
}

export default ProductPage;