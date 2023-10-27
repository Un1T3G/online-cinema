import { GetStaticPaths, GetStaticProps } from 'next'
import { ActorPage as ActorScreen, IActorPageProps } from 'pages/actor'
import { commonApi } from 'shared/api'
import { TNextPageAuth } from 'shared/types'

const ActorPage: TNextPageAuth<IActorPageProps> = (props) => {
  return <ActorScreen {...props} />
}

export const getStaticPaths: GetStaticPaths = async () => {
  try {
    const {
      data: { actors },
    } = await commonApi.actors.getAllActors()
    const paths = actors.map((actor) => ({
      params: { slug: actor.slug },
    }))

    return { paths, fallback: 'blocking' }
  } catch {
    return {
      paths: [],
      fallback: false,
    }
  }
}

export const getStaticProps: GetStaticProps<IActorPageProps> = async ({
  params,
}) => {
  try {
    const {
      data: { actor },
    } = await commonApi.actors.getActorBySlug(String(params?.slug))

    console.log(actor)

    const {
      data: { movies },
    } = await commonApi.movies.getMoviesByActor(actor.id)

    return {
      props: {
        actor,
        movies,
      },
    }
  } catch (error) {
    console.log(error)

    return {
      notFound: true,
    }
  }
}

export default ActorPage
