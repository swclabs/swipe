import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ResizableHandle, ResizablePanel, ResizablePanelGroup } from "@/components/ui/resizable";
import Image from "next/image";
import { EditLogo } from "./ui/button";


export default function HeroArea() {
	return (
		<Card id="logo">
			<CardHeader>
				<div className=" flex justify-between">
					<div className=" flex flex-col">
						<CardTitle>Logo</CardTitle>
						<CardDescription>
							Manage your products and view their sales performance.
						</CardDescription>
					</div>
					<div className=" flex">
						<EditLogo />
					</div>
				</div>
			</CardHeader>
			<CardContent>
				<ResizablePanelGroup
					direction="horizontal"
					className="border rounded-lg"
				>
					<ResizablePanel defaultSize={50}>
						<div className="flex h-[200px] items-center justify-center p-6 bg-gray-50">
							<Image
								src="/logo.svg"
								alt=""
								width="200"
								height="100"
							/>
						</div>
					</ResizablePanel>
					<ResizableHandle />
					<ResizablePanel defaultSize={50}>
						<ResizablePanelGroup direction="vertical">
							<ResizablePanel defaultSize={50}>
								<div className="flex h-full items-center justify-center p-6">
									<span className="font-semibold">Vẫn còn thời gian để
										Tạo nên những bất ngờ thú vị
									</span>
								</div>
							</ResizablePanel>
							<ResizableHandle />
							<ResizablePanel defaultSize={50}>
								<div className="flex h-full items-center justify-center p-6">
									<span className="font-semibold">
										Mua được quà “hot” dù là phút cuối
									</span>
								</div>
							</ResizablePanel>
						</ResizablePanelGroup>
					</ResizablePanel>
				</ResizablePanelGroup>
			</CardContent>
		</Card >
	)
}