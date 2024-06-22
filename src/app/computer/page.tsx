"use client"
import React from 'react';
import Banner from "@/components/common/banner"
import Welcome from '@/components/common/welcome-section';
import Widget from '@/components/common/widget';
import WidgetData1 from '@/faker/widget';
import WidgetMac2, { WidgetMac3, WidgetMac4 } from '@/faker/mac-widget';

function ProductPage() {
  return (
    <div className=' w-full'>
      <Banner />
      <Welcome title='Mac' subtitle='If you can dream it, Mac can do it' />
      <Widget data={WidgetData1} />
      <Widget data={WidgetMac2} />
      <Widget data={WidgetMac3} />
      <Widget data={WidgetMac4} />
    </div>
  )
}

export default ProductPage;