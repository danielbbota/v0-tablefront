/**
 * Featured client work. Copy lives in the dictionaries under
 * `latestProject.projects[id]`; this file only carries the facts that don't
 * translate. The homepage section renders a single feature while there is one
 * entry and switches to a grid once there are more.
 */
export type ProjectId = "aconchego"

export type Vertical = "hospitality" | "beauty" | "shops"

export interface ProjectData {
  id: ProjectId
  name: string
  url: string
  /** Served from /public — a desktop screenshot of the live site. */
  image: string
  width: number
  height: number
  vertical: Vertical
}

export const PROJECTS: ProjectData[] = [
  {
    id: "aconchego",
    name: "Aconchego Dry Gin",
    url: "https://www.aconchegodrygin.com",
    image: "/images/projects/aconchego-dry-gin.webp",
    width: 2000,
    height: 1082,
    vertical: "shops",
  },
]
