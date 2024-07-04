"use client"
import React from 'react';
import Banner from "@/components/common/banner"
import News from '@/components/phone/news';
import Accessories from '@/components/phone/accessories';
import ProductBar from '@/components/phone/product-bar';
import Product from '@/components/phone/product';
import Welcome from '@/components/common/welcome-section';
import posts from '@/faker/posts';
import ProductIphoneTypes from '@/components/phone/product-types';
import { motion } from "framer-motion"
import Widget, { PostsWidget } from '@/components/common/widget';
import WidgetData1 from '@/faker/widget';

function IphonePage() {
  return (
    <div className=" w-full bg-gray-50">
      <Banner />
      <Welcome title='iPhone' subtitle='Được thiết kế mà ai cũng mê' />
      <PostsWidget data={posts} />
      <Widget data={WidgetData1} />
    </div>
  );
}

export default IphonePage;