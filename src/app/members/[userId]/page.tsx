import { getMemberByUserId } from "@/app/actions/memberActions";
import React from "react";

export default function MemberDetailedPage({ params }: { params: { userId: string } }) {
	const member = await getMemberByUserId(params.userId);

    if (!member) {
        return notFound();

	return <div>{member?.name}</div>;
}
