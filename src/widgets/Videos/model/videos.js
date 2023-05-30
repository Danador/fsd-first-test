import { fetchData } from "tools/api";
import { upData } from "tools/filters";

export async function getVideos(){
	let params = {
		populate: [
			'list',
			'list.video',
			'list.preview',
			'meta',
			'meta.image'
		]
	}
	let videos = await fetchData("/api/video/", {
		urlParams: params,
	})
	videos = upData(videos.data)
	videos.list = videos.list.map((i) => {
		i.video = upData(i.video.data)
		return i
	})
	return videos
}
