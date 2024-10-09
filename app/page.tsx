import React from "react"

import { Button } from "@/components/ui/button"

export default function IndexPage() {
  return (
    <section className="container grid items-center gap-6 pb-8 pt-6 md:py-10">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">邮件编辑器</h1>
        <div className="space-x-2">
          <Button variant="outline">预览</Button>
          <Button variant="outline">保存草稿</Button>
          <Button>发送</Button>
        </div>
      </div>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        <div>
          <h2 className="text-lg font-bold">邮件内容</h2>
          <textarea
            className="w-full h-96 p-4 border rounded-md"
            placeholder="请输入邮件内容"
          />
        </div>
        <div>
          <h2 className="text-lg font-bold">邮件预览</h2>
          <div className="h-96 p-4 border rounded-md">预览区域</div>
        </div>
      </div>
    </section>
  )
}
